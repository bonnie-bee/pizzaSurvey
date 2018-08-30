const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define(
    "Users",
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  );

  User.associate = function(models) {
    User.hasMany(models.Reviews, {
      onDelete: "cascade"
    })
  };
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return User;
};
