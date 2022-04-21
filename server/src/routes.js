// All routes are defined here instead of app.js for simplicity and
// reviewability
module.exports = (app) => {
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
};
