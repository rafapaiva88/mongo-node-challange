/* eslint-disable camelcase */
const express = require('express');

const Class = require('../models/class');
const Comment = require('../models/comment');

const router = express.Router();

// create comment
router.post('/', async (request, response) => {
  try {
    const { id_class } = request.body;

    const classes = await Class.findById(id_class);

    const commentClass = await Comment.create(request.body);

    await classes.comments.push(commentClass);

    await classes.save();

    const totalComments = await Comment.count(id_class);

    await Class.findByIdAndUpdate(
      id_class,
      {
        last_comment: commentClass.comment,
        last_comment_date: commentClass.created_at,
        total_comments: totalComments,
      },
      { new: true },
    );

    return response.json(classes);
  } catch (error) {
    return response.status(400).json({ massage: 'Error to create comment' });
  }
});

// list comment
router.get('/:id', async (request, response) => {
  try {
    const page = request.query.page || 1;
    const limit = 50;
    const skip = (page - 1) * limit;
    const commentList = await Comment.find({ id_class: request.params.id })
      .skip(skip)
      .limit(limit);

    return response.json(commentList);
  } catch (error) {
    return response.status(400).json({ massage: 'Error to list comment' });
  }
});

// delete comment
router.delete('/:id', async (request, response) => {
  try {
    await Comment.findByIdAndRemove(request.params.id);

    return response.send();
  } catch (error) {
    return response.status(400).json({ massage: 'Error to delete comment' });
  }
});

module.exports = app => app.use('/classes/comments', router);
