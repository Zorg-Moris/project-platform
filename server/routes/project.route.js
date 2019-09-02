const express = require('express');
const projectRoutes = express.Router();


let Project = require('../models/project.model');

// Defined store route
projectRoutes.route('/').post(function (req, res) {
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
  Project.find({}, function (err, projects) {
    if (err) {
      res.status(400).send("unable to save to database - ", err);
    } else {
      res.json(projects);
      //  res.status(200).send('Successfully to save to database project Api');
    }
  });
});

// Defined edit route
projectRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Project.findById(id, function (err, project) {
    if (err) {
      res.status(404).send("Not Found - ", err);
    } else {
      res.json(project);
    }
  });
});

//  Defined update route
projectRoutes.route('/:id').put(function (req, res) {
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
          // res.json('Update complete');
          res.json(project);
        })
        .catch(err => {
          res.status(304).send("unable to update the database - ", err);
        });
    }
  });
});

// Defined delete 
projectRoutes.route('/:id').delete(function (req, res) {
  Project.findOneAndDelete({
    _id: req.params.id
  }, function (err, project) {
    if (err) {
      res.status(404).send("unable to delete in database - ", err);
    } else {
      res.status(204).send('Successfully removed');
      // res.json('Successfully removed');
    }
  });
});

//update info like/dizlike

projectRoutes.route('/:id/likes').put(function (req, res) {
  Project.updateOne({
    _id: req.params.id
  }, {
    $inc: {
      like: 1
    }
  }, function (err, response) {
    if (err) {
      res.status(400).send("unable to save to database");
    } else {
      res.status(200).send('Successfully to save to database project Api');
    }
  })
})


projectRoutes.route('/:id/dizlikes').put(function (req, res) {
  Project.updateOne({
    _id: req.params.id
  }, {
    $inc: {
      dizlike: 1
    }
  }, function (err, response) {
    if (err) {
      res.status(400).send("unable to save to database");
    } else {
      res.status(200).send('Successfully to save to database');
    }
  })
})


module.exports = projectRoutes;