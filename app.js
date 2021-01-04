// // Import npm
const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');

// // Import 
const routes = require('./config/routes');
// const test = require('./test/service/test')

const app = express();

// // Connect Database
mongoose.connect('mongodb://localhost/stage3vmo-centerManage', {useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connect! - Database');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use
app.use('/', routes);

// Port
app.listen(3000, () => {
  console.log('Success!');
});