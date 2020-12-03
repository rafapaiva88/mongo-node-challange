const mongoose = require('mongoose');

const { Schema } = mongoose;

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ClassesModel', classSchema);
