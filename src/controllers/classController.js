/* eslint-disable camelcase */
const express = require('express');

const Class = require('../models/class');

const router = express.Router();

// create class
router.post('/', async (request, response) => {
  try {
    const createdClass = await Class.create(request.body);

    return response.json(createdClass);
  } catch (error) {
    return response.status(400).json({ massage: 'Error to create' });
  }
});

// list class
router.get('/', async (request, response) => {
  try {
    const page = request.query.page || 1;
    const limit = 50;
    const skip = (page - 1) * limit;
    const classes = await Class.find()
      .skip(skip)
      .limit(limit)
      .populate(['comments']);

    return response.json(classes);
  } catch (error) {
    return response.status(400).json({ massage: 'Error to list classes' });
  }
});

// list class by id
router.get('/:id', async (request, response) => {
  try {
    const page = request.query.page || 1;
    const limit = 50;
    const skip = (page - 1) * limit;
    const classes = await Class.findById(request.params.id)
      .skip(skip)
      .limit(limit)
      .populate({
        path: 'comments',
        options: { sort: { _id: -1 } },
        limit: 3,
      });

    const comments = classes.comments.map(commit => {
      return { commit: commit.comment };
    });

    return response.json({
      name: classes.name,
      comments,
    });
  } catch (error) {
    return response.status(400).json({ massage: 'Error to list class id' });
  }
});

// update class
router.put('/', async (request, response) => {
  try {
    const {
      id_class,
      name,
      description,
      video,
      data_init,
      data_end,
    } = request.body;

    const classUpdated = await Class.findByIdAndUpdate(
      id_class,
      {
        id_class,
        name,
        description,
        video,
        data_init,
        data_end,
      },
      { new: true },
    );

    return response.json(classUpdated);
  } catch (error) {
    return response.status(400).json({ massage: 'Error to update class' });
  }
});

// delete class
router.delete('/:id', async (request, response) => {
  try {
    await Class.findByIdAndRemove(request.params.id);

    return response.send();
  } catch (error) {
    return response.status(400).json({ massage: 'Error to delete' });
  }
});

module.exports = app => app.use('/classes', router);
