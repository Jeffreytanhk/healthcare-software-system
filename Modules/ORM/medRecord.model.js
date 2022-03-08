const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require('./setup');
const Clinic = require('./clinic.model');
const Person = require('./person.model');
const MC = require('./mc.model');

class MedRecord extends Model {}

MedRecord.init(
  {
    regNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'reg_no'
    },
    clinicID: { // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'clinic_ID'
    },
    FIN: { // FK
      type: DataTypes.STRING,
      allowNull: false,
    },
    issueMC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'issue_mc'
    },
    mcID: { //FK
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mc_ID'
    },
    medicalHistory: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'medical_history'
    },
    currentDiagnosis: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'current_diagnosis'
    },
    visitHistory: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'visit_history'
    },
    nextOfKinName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'next_of_kin_name'
    },
    nextOfKinContact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'next_of_kin_contact'
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
    modelName: "MedRecord",
    tableName: "MedRecord",
  }
);

MedRecord.belongsTo(
  Clinic,
  {
    foreignKey: 'clinicID'
  }
);

MedRecord.belongsTo(
  Person,
  {
    foreignKey: 'FIN'
  }
);

MedRecord.belongsTo(
  MC,
  {
    foreignKey: 'mcID'
  }
);

module.exports = MedRecord;