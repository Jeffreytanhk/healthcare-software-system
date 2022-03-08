const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require('./setup');

class Clinic extends Model {}

Clinic.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
  },
  {
    sequelize,
    modelName: "Clinic",
    tableName: "Clinic",
  }
);

module.exports = Clinic;