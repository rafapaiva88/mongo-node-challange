const mongoose = require('mongoose');

const Classes = mongoose.model('ClassesModel');

// list
exports.listClass = async (request, response) => {
  const classes = await Classes.find({});

  return response.json(classes);
};

// create
exports.createClass = async (request, response) => {
  const { name, description } = request.body;

  const classes = new Classes({
    name,
    description,
  });

  await classes.save();

  return response.json(classes);
};
