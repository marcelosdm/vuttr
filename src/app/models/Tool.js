const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Tool = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

Tool.plugin(mongoosePaginate)

module.exports = mongoose.model('Tool', Tool)
