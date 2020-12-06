const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/tindindb';

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

module.exports = mongoose;
