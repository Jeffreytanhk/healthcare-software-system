//routes
const app = require("./Modules/Routes/index.js");
//ORM/Databse
const Clinic = require('./Modules/ORM/clinic.model');
// const Company = require('./Modules/ORM/company.model');
// const EmployeeRecord = require('./Modules/ORM/empRecord.model');
const MC = require('./Modules/ORM/mc.model');
const MedRecord = require('./Modules/ORM/medRecord.model');
const Person = require('./Modules/ORM/person.model');
const {sequelize} = require("./Modules/ORM/setup");

//Sync database
(async ()=> {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force:true});
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
      // Bootstrap data seeder
      const dob = new Date();
      dob.setFullYear(1986);
      const fin = "F1234567T";
      const createdPerson = await Person.create({
          FIN:fin,
          name:"Test Name",
          address:"Test address",
          dateOfBirth: dob,
      });
      console.log("Created a person", createdPerson);

      const createdClinic = await Clinic.create({
          name:"Test Clinic",
          address:"Test clinic address"
      });
      console.log("Created clinic", createdClinic);

      const createdMC = await MC.create({
          FIN:fin,
          clinicID:createdClinic.ID,
          mcStartDate:new Date(),
          mcEndDate: new Date(2022, new Date().getMonth(), new Date().getDate()+2),
          status:"TEST"
      })
      console.log("created MC", createdMC);
      
      const createdMedRecord = await MedRecord.create({
          clinicID:createdClinic.ID,
          FIN:fin,
          issueMC:true,
          mcID:createdMC.mcId,
          medicalHistory:"bla bla history",
          currentDiagnosis:"bla bla dianogsis",
          visitHistory:new Date(),
          nextOfKinName:"next of kin",
          nextOfKinContact:123123
      })
      console.log("created med record", createdMedRecord);
    // await Company.sync();
    // await Clinic.sync();
    // await EmployeeRecord.sync();
    // await MC.sync();
    // await MedRecord.sync();
    // await Person.sync();
})()


app.get('/', (req, res) => {
    res.json("Test");
})

//port number
const PORT = process.env.PORT || 5050;

//app to run at this port number
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});