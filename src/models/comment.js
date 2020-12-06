const mongoose = require('../database');

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  id_class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
