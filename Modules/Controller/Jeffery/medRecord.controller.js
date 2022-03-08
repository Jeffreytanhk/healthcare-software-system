const {createNewPatient} = require('../../Services/Jeffery/medRecord.service');

const createNewMedicalRecord = async (req, res) => {
  
    try{
      const created = await createNewPatient(req.body);
      res.send(created);
    }catch(e){
      console.error("creaed new patient encountered error", e);      
      res.sendStatus(500); // internal server error      
    }
    
}

module.exports = {
  createNewMedicalRecord
}