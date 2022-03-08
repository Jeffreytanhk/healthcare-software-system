const {Sequelize} = require('sequelize');
// const sequelize = new Sequelize('postgres://qtczajzjwoznyj:5656cf39838a51ab8201887c3155e40f74c3c11ce21ef92ffd7f895324ef2135@ec2-3-230-238-86.compute-1.amazonaws.com:5432/d3af21566s9let', {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// });
const sequelize = new Sequelize('sqlite::memory:');

  
module.exports = {sequelize};