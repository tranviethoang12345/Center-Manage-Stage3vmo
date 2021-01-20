// // Import npm
const express = require('express');
const bodyParser =  require('body-parser');
require('dotenv').config();

// // Connect Database
require('./src/config/database')

// // Import Routers
const routes = require('./src/config/routes'); 
// const test = require('./test/service/test')

const app = express();

// Setting for accepting post form data (body-parser)
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`);
});