const MedRecord = require("../../ORM/medRecord.model");

module.exports = {

    /*
        Argument (data) must contain the following attributes:
        {
            "clinicID": 1,
            "FIN": "F1234567T",
            "issueMC": true,
            "mcID": 1,
            "medicalHistory": "bla bla history 2",
            "currentDiagnosis": "bla bla dianogsis 2",            
            "nextOfKinName": "next of kin",
            "nextOfKinContact": 123123,
        }

        This attribute will be auto generated:
        - "visitHistory"
    */
    createNewPatient: async (data) => {
        data.visitHistory = new Date();
        
        try{
            return await MedRecord.create(data);  
        }catch(e){
            throw e;
        }              
    }

}
