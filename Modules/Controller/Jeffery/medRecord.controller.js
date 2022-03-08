const Person = require('../models/person.model');
const router = require('../routes/person');

const express = require('express').Router();

router.route('/').get((req, res) => {
    Person.findAll()
        .then(person => res.json(person))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/'), (req, res) => {
    const fin = req.body.FIN;
    const name = req.body.name;
createMedRecord([fin, name]), (err) => {
    if (err) return res.status(500).send("FIN already exist. Please review !");
    findPersonByFIN(fin, (err, Person) => {
        if (err) return res.status(500).send("FIN not found. ");
    }
    )}
}