const express = require('express');
const userRoutes = express.Router();


let User = require('../models/user.model');


userRoutes.route('/add_user').post(function (req, res) {
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


userRoutes.route('/set_likes').put(function (req, res) {

  console.log(req.body);
  let { user_id, project_id } = req.body;

  User.updateOne({ _id: user_id }, { $addToSet: { likes: [project_id] } }, function (err, responce) {

    if (err) {
      console.log("unable to save to database", err);
      res.status(400).send("unable to save to database set like");
    } else {
      console.log('Successfully to save to database set_like', responce);
      res.status(200).send('Successfully to save to database set like');
    }
  })
})


module.exports = userRoutes;
