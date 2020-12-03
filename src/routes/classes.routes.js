const express = require('express');

const router = express.Router();

const classesController = require('../controllers/classes.controller');

router.get('/', classesController.listClass);
router.post('/', classesController.createClass);

module.exports = router;
