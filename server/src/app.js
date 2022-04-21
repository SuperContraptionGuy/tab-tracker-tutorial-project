const express = require('express');
// process JSON data easily
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');

// basic webserver that enables us to build REST style API endpoints
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

// allows any client or host to access this from different domains, security
// risk???  TODO security risk?
app.use(cors());

console.log('Server Started!');

// define routes based on routes.js
require('./routes')(app);

// endpoints
// defining a route in express (API endpoint to hit)
//
// kinds of requests:
// get
// post
// put
// patch
// delete

// connecting to a SQL database with Sequalize ORM object oriented relational
// database manager
// data models. each model matches up to a database or data table


sequelize.sync().then(() => {
  app.listen(process.env.PORT || 8081);

  console.log(`Server started on port ${config.port}`);
});
