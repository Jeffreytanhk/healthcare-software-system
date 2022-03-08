const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require('./setup');

class Company extends Model {}

Company.init(
  {
    UEN: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    industry: {
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
    modelName: "Company",
    tableName: "Company",
  }
);

module.exports = Company;