// server/routes/street-arts.js
const express = require('express')
const StreetArt = require('../models/StreetArt')
const router = express.Router()
const uploader = require('../configs/cloudinary')

// Route: GET /api/street-arts
router.get('/', (req, res, next) => {
  // TODO
  StreetArt.find() // no condition because we want all of them
    .then(streetsArts => {
      res.json(streetsArts)
    })
    .catch(err => next(err))
})

// Route: GET /api/street-arts/:streetArtId
router.get('/:id', (req, res, next) => {
  StreetArt.findById(req.params.id)
    .then(streetArt => {
      res.json(streetArt)
    })
    .catch(err => next(err))
})

// Route to create a street art
// `uploader.single('picture')` parses the data send with the name `picture` and save information inside `req.file`
router.post('/', uploader.single('picture'), (req, res, next) => {
  let { lat, lng } = req.body
  let pictureUrl = req.file.url
  StreetArt.create({
    pictureUrl,
    location: {
      coordinates: [lng, lat],
    },
  })
    .then(streetArt => {
      res.json(streetArt)
    })
    .catch(err => next(err))
})

module.exports = router
