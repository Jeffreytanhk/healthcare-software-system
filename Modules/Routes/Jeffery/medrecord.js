const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Medical Record")
})

//Retrieve new Medical Record Form
router.get("/new", (req, res) => {
    res.send("New Medical Record Form")
})

//Create new medical record's identity
// router.post('/', (req, res) => {
//     res.send("Create new Medical Record")
// })

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