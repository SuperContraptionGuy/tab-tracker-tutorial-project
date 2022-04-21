// defines a model for interacting with the SQL database
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  });
};
