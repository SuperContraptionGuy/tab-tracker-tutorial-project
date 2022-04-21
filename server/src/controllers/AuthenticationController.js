// exports functions for the routes.js file to call, helping to distinguish
// between API endpoints and actual functionality code.
const {User} = require('../models');

module.exports = {
  async register(req, res) {
    // save username and password into the database.
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      res.status(400).send({
        error: `This email account is already in use, or other database error.`,
        DatabaseError: `${err}`,
      });
    }
  },
};
