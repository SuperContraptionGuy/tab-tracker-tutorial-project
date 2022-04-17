
console.log('hello world.');

const express = require('express');
// process JSON data easily
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// basic webserver that enables us to build REST style API endpoints
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

// allows any client or host to access this from different domains, security
// risk???  TODO security risk?
app.use(cors());


// endpoints
// defining a route in express (API endpoint to hit)
//
// kinds of requests:
// get
// post
// put
// patch
// delete

app.get('/status', (req, res) => {
  res.send({ // send back json response
    message: 'yo wad up world!',
  });
});

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}. Thanks for signing up.`,
  });
});

app.listen(process.env.PORT || 8081);
