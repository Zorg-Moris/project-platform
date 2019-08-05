const express = require('express');
const userRoutes = express.Router();

let User = require('./user.model');


userRoutes.route('/adduser').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({ 'user': 'user added successfully' });
    })
    .catch(err => {
      res.status(400).send(
        'unable to save to database')
    });
});

userRoutes.route('/').get(function (req, res) {
  User.find({}, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  })
});


userRoutes.route('/auth').post(function (req, res) {
  console.log(req.body.user_name);

  User.findOne({ user_name: req.body.user_name }, function (err, user) {
    if (!user) {
      res.status(404).send("data is not found");
    } else {
      res.json(user);
    }
  })
});


userRoutes.route('/setlike').post(function (req, res) {

  console.log(req.body);
  let { user_id, project_id } = req.body;

  User.updateOne({ _id: user_id }, { $addToSet: { likes: [project_id] } }, function (err, res) {

    if (err) {
      console.log("unable to save to database", err);
    } else {
      console.log('Successfully to save to database', res);
    }
  })
})


module.exports = userRoutes;
