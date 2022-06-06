const express = require('express')
const app = express()

const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'first_schema_database',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
})

app.get('/insert', (req, res) => {
    db.query('INSERT INTO countries (countryName, population) VALUES ("Brazil", 200000)', (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('server running')
})