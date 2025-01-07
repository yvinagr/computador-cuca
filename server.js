const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'EmployeeSystem'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});

// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM Users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) res.sendStatus(200);
        else res.sendStatus(401);
    });
});

// Fetch employees
app.get('/employees', (req, res) => {
    const sql = 'SELECT * FROM Employees';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add employee
app.post('/employees', (req, res) => {
    const { name, role, contact } = req.body;
    const sql = 'INSERT INTO Employees (name, role, contact) VALUES (?, ?, ?)';
    db.query(sql, [name, role, contact], err => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));
