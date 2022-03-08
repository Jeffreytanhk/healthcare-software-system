const express = require("express");
const app = express();
app.use(express.json());

//example of defining routes:
//Tianhao
//*******************routes import**********************
//const protectedRouters = require("./protected.routes");
//const generalRoutes = require("./general.routes");
//*******************routes use**********************
//app.use(protectedRouters);
//app.use(generalRoutes);
//---------------------------------------------------------------------------------------------------------

//Jeffery
//*******************routes import**********************
const medicalRecordRoute = require("./Jeffery/medrecord");
//*******************routes use**********************
app.use("/medicalrecord", medicalRecordRoute);

//Regina
//*******************routes import**********************
const updateMedicalRecord = require('../Routes/Regina/clinicUpdateRecord.routes');
//*******************routes use**********************
app.use(updateMedicalRecord);

//Sarah
//*******************routes import**********************
const createMC = require('../Routes/Sarah/mc.route');
//*******************routes use**********************
app.use(createMC);

//Shaun
//*******************routes import**********************
//***place here****
//*******************routes use**********************
//***place here****

//Tianhao
//*******************routes import**********************
const supervisorViewMC = require("./Tianhao/supervisor.viewmc.routes");
//*******************routes use**********************
app.use(supervisorViewMC);

module.exports = app;
