'use strict';
const express = require('express');
const app = express();
const open = require("open");
console.log("magic");

app.use(express.static('docs'));

app.get('/api/v1/airtravel', function(req, res) {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        port: '32000',
        user: 'root',
        password: 'root',
        database: 'flights'
    });
    connection.connect();

    connection.query('SELECT * FROM airtravel', function (err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        res.json({ "data": rows});
    })
    
    connection.end()


});

app.set('port', process.env.PORT || 8080);
app.set('ip', process.env.NODEJS_IP || '127.0.0.1');

app.listen(app.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
});