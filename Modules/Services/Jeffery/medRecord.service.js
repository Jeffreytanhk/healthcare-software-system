const {MedRecord, Person} = require("../ORM/setup");

module.exports = {

    createNewPatient: async (regNo, FIN) => {
        //The result object is where we will put the result to be send to the client
        let result = {
            message: null,
            status: null, 
            data: null
        }
        //Look for the medRecord and Person in the database.
        const medRecord = await MedRecord.findByPk(regNo);
        const patient = await Person.findByPk(FIN);

        if(!medRecord){
            result.message = `MedRecord ${regNo} in not found`;
            result.status = 404;
            return result;
        }

        if(!driver){
            result.message = `Person's FIN ${FIN} in not found`;
            result.status = 404;
            return result;
        }

        //check if the MedRecord has already been used
        if(medRecord.FIN){
            result.message = `Medical Record ${regNo} already in use.`;
            result .status = 400;
            return result;
        }
        medRecord.FIN = patient.FIN;
        await medRecord.save(); //Update the medRecord
        //option 2: rerun the query to find the medRecord and assign it to result.data
        //result.data = await MedRecord.findByPk(regNo);
        //save() returns the content of the updated rows.
        result.data = medRecord;
        result.status = 200;
        result.message = "Register successful";
        return result;

    }

}
