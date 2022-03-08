//routes
const app = require("./Modules/Routes/index.js");
//ORM/Databse
const Clinic = require('./Modules/ORM/clinic.model');
const Company = require('./Modules/ORM/company.model');
const EmployeeRecord = require('./Modules/ORM/empRecord.model');
const MC = require('./Modules/ORM/mc.model');
const MedRecord = require('./Modules/ORM/medRecord.model');
const Person = require('./Modules/ORM/person.model');

//Sync database
Clinic.sync();
Company.sync();
EmployeeRecord.sync();
MC.sync();
MedRecord.sync();
Person.sync();

app.get('/', (req, res) => {
    res.json("Test");
})

//port number
const PORT = process.env.PORT || 5050;

//app to run at this port number
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});