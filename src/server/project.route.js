const express = require('express');
const projectRoutes = express.Router();


let Project = require('./project.model');

// Defined store route
projectRoutes.route('/add').post(function (req, res) {
  let project = new Project(req.body);
  project.save()
    .then(project => {
      res.status(200).json({ 'project': 'project in added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
projectRoutes.route('/').get(function (req, res) {
  Project.find(function (err, project) {
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
    if (!project)
      res.status(404).send("data is not found");
    else {
      project.person_name = req.body.person_name;
      project.project_name = req.body.project_name;
      project.description = req.body.description;

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
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});


module.exports = projectRoutes;