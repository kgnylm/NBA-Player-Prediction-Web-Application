const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    default: 'No name',
  },
  surname: {
    type: String,
    trim: true,
    default: 'No surname',
  },
  Image: {
    type: String,
    trim: true,
    default: 'No image',
  },
  age: {
    type: Number,
    default: 31,
  },
  position: {
    type: String,
    enum: ['G', 'F', 'C'],
    default: 'G',
  },
  team: {
    type: String,
    trim: true,
    default: 'No team',
  },
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player
