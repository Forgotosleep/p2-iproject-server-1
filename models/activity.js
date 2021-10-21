'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.User, { as: "Author", foreignKey: "UserId" })
      Activity.belongsToMany(models.User, { through: "UserActivity", foreignKey: "ActivityId"})
    }
  };
  Activity.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Activity title is required"
        },
        notNull: {
          msg: "Activity title is required"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "User ID is required"
        },
        notNull: {
          msg: "User ID is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};