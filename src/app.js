const express = require('express');

const app = express();
app.use(express.json());

require('./controllers/classController')(app);
require('./controllers/commentController')(app);

module.exports = app;
