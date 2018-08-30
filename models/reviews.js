module.exports = function(sequelize, DataTypes) {
  let Reviews = sequelize.define(
    "Reviews",
    {
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false
      },
      appearance:{
        type: DataTypes.INTEGER,
        allownull: false
      },
      crust: {
        type: DataTypes.INTEGER,
        allownull: false
      },
      sauce: {
        type: DataTypes.INTEGER,
        allownull: false
      },
      cheese: {
        type: DataTypes.INTEGER,
        allownull: false
      },
      toppings: {
        type: DataTypes.INTEGER,
        allownull: false
      },
      grease: {
        type: DataTypes.INTEGER,
        allownull: false
      },
      temperature: {
        type: DataTypes.INTEGER,
        allownull: false
      },
      feel: {
        type: DataTypes.INTEGER,
        allownull: false
      },
      taste: {
        type: DataTypes.INTEGER,
        allownull: false
      }
    }
  );

  Reviews.associate = function(models) {
    Reviews.belongsTo(models.Users, {
        foreignKey: {
            allowNull: false
          }
    })
  };

  return Reviews;
};
