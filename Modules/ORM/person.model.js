const { DataTypes, Model, Sequelize } = require("sequelize");
const {sequelize} = require('./setup');
//const EmployeeRecord = require("./empRecord.model");

class Person extends Model {}

Person.init(
  {
    FIN: {
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
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_of_birth'
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
    modelName: "Person",
    tableName: "Person",
  }
);

// Person.belongsTo(
//   EmployeeRecord,
//   {
//     foreignKey: 'FIN'
//   }
//)

module.exports = Person;