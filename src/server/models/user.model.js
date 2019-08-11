const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  user_name: {
    type: String
  },
  password: {
    type: String
  },
  likes: {
    type: Array
  }
}, {
    collection: 'users'
  });

module.exports = mongoose.model('User', User);