const express = require("express")
const router = express.Router()
const MedicalRecordModel = require("../../ORM/medRecord.model");

router.get("/", (req, res) => {
    res.send("Medical Record")
})

//Retrieve new Medical Record Form
// GET /medicalrecord/new
router.get("/new", (req, res) => {
    res.send("New Medical Record Form")
})

//Create new medical record's identity
// POST /medicalrecord
/*
{
    clinicID:integer,
    FIN:string,
    issueMC: boolean,
    mcID:integer,
    medicalHistory:string,
    currentDianogsis:string,
    visitHistory: date (today's date),
    nextOfKinContact: integer
}
*/
router.post('/', async (req, res) => {
    const created = await MedicalRecordModel.create({
        clinicID:req.body.clinicID,
        FIN:req.body.FIN,
        issueMC: req.body.issueMC,
        mcID:req.body.mcID,
        medicalHistory: req.body.medicalHistory,
        currentDianogsis: req.body.currentDianogsis,
        visitHistory: new Date(),
        nextOfKinContact: req.body.nextOfKinContact
    })

    res.send(created);
})

//Dynamic router for new medical record through FIN search
router.route('/:FIN')
    .get((req, res) => {
        req.params.FIN
        res.send(`Get Medical Record with FIN ${req.params.FIN}`)
    })
//Dynamic router for medical record update
    .put((req, res) => {
        req.params.FIN
        res.send(`Update Medical Record with FIN ${req.params.FIN}`)
    })
//Dynamic router for new medical record deleting
    // .delete((req, res) => {
    //     req.params.FIN
    //     res.send(`Delete Medical Record with FIN ${req.params.FIN}`)
    // })

    router.param("FIN", (req, res, next, FIN) => {
        console.log(FIN)
        next()
    })


// router.get('/:FIN', (req, res) => {
//     req.params.FIN
//     res.send(`Get Medical Record with FIN ${req.params.FIN}`)
// })

// 
// router.put('/:FIN', (req, res) => {
//     req.params.FIN
//     res.send(`Update Medical Record with FIN ${req.params.FIN}`)
// })

// 
// router.delete('/:FIN', (req, res) => {
//     req.params.FIN
//     res.send(`Delete Medical Record with FIN ${req.params.FIN}`)
// })



module.exports = router