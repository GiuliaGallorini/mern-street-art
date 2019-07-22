const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
  {
    pictureUrl: String,
    location: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: [Number],
      // The coordinates like these will enable to sort and find the street-arts in a certain location
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('StreetArt', schema)
