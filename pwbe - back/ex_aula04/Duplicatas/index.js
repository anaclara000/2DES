const express = require("express");
const cors = require("cors");
const mysql = require("mysql")

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'duplicatas'
});

app.get ('/clientes',(req, res) => {
    let string = "select * from vw_clientes"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});

app.get ('/duplicatas/duplicatasPagas',(req, res) => {
    let string = "select * from duplicatas_pagas"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});
app.get ('/duplicatas',(req, res) => {
    let string = "select * from duplicatas"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});


app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});