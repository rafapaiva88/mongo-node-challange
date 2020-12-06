const mongoose = require('../database');

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  data_init: {
    type: Date,
    required: true,
  },
  data_end: {
    type: Date,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  total_comments: {
    type: Number,
  },
  last_comment: {
    type: String,
  },
  last_comment_date: {
    type: Date,
  },
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
