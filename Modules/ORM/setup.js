const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('postgres://xtamfpsmjawadu:8f535be268ff97e185f715f9ae57c186643cf5f0b2f71a77f3a9ceb45fbedb87@ec2-44-198-29-193.compute-1.amazonaws.com:5432/d2bv2gkabdiq7k', {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = {sequelize};