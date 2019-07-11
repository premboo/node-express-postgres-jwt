const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//var cors = require('cors')
// Set up the express app
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cors())

require('./src/routes')(app);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Titan Watch Assembly project',
}));


module.exports = app;