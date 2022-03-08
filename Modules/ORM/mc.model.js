const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require('./setup');
const Clinic = require('./clinic.model');
const Person = require('./person.model');

class MC extends Model {}

MC.init(
  {
    mcId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'mc_ID'
    },
    FIN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clinicID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'clinic_ID'
    },
    mcStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'mc_start_date'
    },
    mcEndDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'mc_end_date'
    },
    status: {
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
    modelName: "MC",
    tableName: "MC",
  }
);

MC.belongsTo(
  Clinic,
  {
    foreignKey: 'clinicID'
  }
);

MC.belongsTo(
  Person,
  {
    foreignKey: 'FIN'
  }
);

module.exports = MC;