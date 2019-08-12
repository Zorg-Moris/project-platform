const express = require('express');
const projectRoutes = express.Router();


let Project = require('../models/project.model');

// Defined store route
projectRoutes.route('/add').post(function (req, res) {
  let project = new Project(req.body);
  project.save()
    .then(project => {
      // res.status(200).json({ 'project': 'project in added successfully' });
      res.json(project._id);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
projectRoutes.route('/').get(function (req, res) {
  Project.find({}, function (err, project) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(project);
    }
  });
});

// Defined edit route
projectRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Project.findById(id, function (err, project) {
    res.json(project);
  });
});

//  Defined update route
projectRoutes.route('/update/:id').post(function (req, res) {
  Project.findById(req.params.id, function (err, project) {
    if (!project) {
      res.status(404).send("data is not found");
    } else {
      project.person_name = req.body.person_name;
      project.project_name = req.body.project_name;
      project.description = req.body.description;
      project.like = req.body.like;
      project.dizlike = req.body.dizlike;

      project.save().then(project => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete 
projectRoutes.route('/delete/:id').get(function (req, res) {
  Project.findOneAndDelete({ _id: req.params.id }, function (err, project) {
    if (err) {
      res.json(err);
    }
    else {
      res.json('Successfully removed');
    }
  });
});

//update info like/dizlike

 projectRoutes.route('/update_likes/:id').put(function (req, res) {
  Project.updateOne({ _id: req.params.id }, { $inc: { like: 1 } }, function (err, response) {
    if (err) {
      console.log("unable to save to database", err);
      res.status(400).send("unable to save to database");
    } else {
      // console.log('Successfully to save to database - ', response);
      res.status(200).send('Successfully to save to database project Api');
    }
  })
})


projectRoutes.route('/update_dizlikes/:id').put(function (req, res) {
  Project.updateOne({ _id: req.params.id }, { $inc: { dizlike: 1 } }, function (err, response) {
    if (err) {
      console.log("unable to save to database", err);
      res.status(400).send("unable to save to database");
    } else {
      console.log('Successfully to save to database', response);
      res.status(200).send('Successfully to save to database');
    }
  })
})


module.exports = projectRoutes;