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
      mouthfeel: {
        type: DataTypes.INTEGER,
        allownull: false
      },
      taste: {
        type: DataTypes.INTEGER,
        allownull: false
      },
      total: {
        type: DataTypes.INTEGER,
        allownull: false
      }
    }
  );

  //Associates the review table as belonging to the User table 
  Reviews.associate = function(models) {
    Reviews.belongsTo(models.Users, {
      //can't save a review without the id of the logged in user
        foreignKey: {
            allowNull: false
          }
    })
  };

  return Reviews;
};
