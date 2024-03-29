const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./Db.js');
const projectRoute = require('./routes/project.route');
const userRoute = require('./routes/user.route');

const app = express();
const PORT = 4000;
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/projects', projectRoute);
app.use('/users', userRoute);

app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});
