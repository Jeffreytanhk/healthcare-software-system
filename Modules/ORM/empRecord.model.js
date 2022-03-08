const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require('./setup');
const Company = require('./company.model');
const Person = require("./person.model");

class EmployeeRecord extends Model {}

EmployeeRecord.init(
  {
    employeeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'employee_ID',
      autoIncrement:true
    },
    FIN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyUEN: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'company_UEN'
    },
    isWorkingToday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_working_today'
    },
    sickLeaveClaimed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sick_leave_claimed'
    },
    sickLeaveRemaining: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sick_leave_remaining'
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
    modelName: "EmployeeRecord",
    tableName: "EmployeeRecord",
  }
);

EmployeeRecord.belongsTo(
  Company,
  {
    foreignKey: 'companyUEN'
  }
);

EmployeeRecord.belongsTo(
  Person,
  {
    foreignKey: 'FIN'
  }
);

module.exports = EmployeeRecord;
