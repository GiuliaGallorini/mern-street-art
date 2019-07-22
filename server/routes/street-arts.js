// server/routes/street-arts.js
const express = require('express')
const StreetArt = require('../models/StreetArt')
const router = express.Router()

// Route: GET /api/street-arts
router.get('/', (req, res, next) => {
  // TODO
  StreetArt.find() // no condition because we want all of them
    .then(streetsArts => {
      res.json(streetsArts)
    })
    .catch(err => next(err))
})

module.exports = router
