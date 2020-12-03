const express = require('express');
const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const Classes = require('./models/class');

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

const MONGODB_URI =
  'mongodb+srv://admin:tnb7gTrMszDlkQOU@cluster0.u3pe5.mongodb.net/test?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;

try {
  mongoose.connect(
    MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(' Mongoose is connected'),
  );
} catch (err) {
  console.log('could not connect');
}

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
