const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Project = new Schema({
  user_id: {
    type: String
  },
  user_name: {
    type: String
  },
  project_name: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  like: {
    type: Number
  },
  dizlike: {
    type: Number
  },
}, {
    collection: 'projects'
  });

module.exports = mongoose.model('Project', Project);
