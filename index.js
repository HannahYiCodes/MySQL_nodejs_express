// SAME AS branchprac.js
const express = require('express')
const app = express()

const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'countries',
})

app.get('/select', (req, res) => {
    db.query(
        "SELECT * FROM countries", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

app.post('/insert', (req, res) => {
    const countryName = "Bulgaria";
    const population = 69000000;


    db.query('INSERT INTO countries (countryName, population) VALUES (?, ?)', [countryName, population], (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('server running')
})
