// All routes are defined here instead of app.js for simplicity and
// reviewability.
// Routes point to the controllers for functionality.
const AuthenticationController =
    require('./controllers/AuthenticationController');
const HelloWorldController = require('./controllers/HelloWorldController');

module.exports = (app) => {
  app.get('/status',
      HelloWorldController.reply);

  app.post('/register',
      AuthenticationController.register);
};
