'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserActivity.belongsTo(models.User, { foreignKey: "UserId" })
      UserActivity.belongsTo(models.Activity, { foreignKey: "ActivityId" })
    }
  };
  UserActivity.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
    },
    ActivityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Activity ID is required"
        },
        notNull: {
          msg: "Activity ID is required"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Activity status is required"
        },
        notNull: {
          msg: "Activity status is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'UserActivity',
    hooks: {
      beforeCreate(useractivity, options) {
        useractivity.status = "pending"
      }
    }
  });
  return UserActivity;
};