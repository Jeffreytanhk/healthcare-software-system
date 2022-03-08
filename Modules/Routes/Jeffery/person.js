const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Person Identity")
})

//Retrieve new Person Identity Form
router.get("/new", (req, res) => {
    res.send("New Person Identity Form")
})

//Create new Person's identity
router.post('/', (req, res) => {
    res.send("Create new Medical Record")
})

//Dynamic router for new Person through FIN search
router.get('/:FIN', (req, res) => {
    req.params.FIN
    res.send(`Get Person with FIN ${req.params.FIN}`)
})

//Dynamic router for new Person update
router.put('/:FIN', (req, res) => {
    req.params.FIN
    res.send(`Get Person with FIN ${req.params.FIN}`)
})

//Dynamic router for new Person deleting
router.delete('/:FIN', (req, res) => {
    req.params.FIN
    res.send(`Get Person with FIN ${req.params.FIN}`)
})



module.exports = router