const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
    // Because of `timestamps: true` creates 2 fields: createdAt and updatedAt
  }
)

module.exports = mongoose.model('User', schema)
