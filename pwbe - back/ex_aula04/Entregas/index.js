const express = require("express");
const cors = require("cors");
const mysql = require("mysql")

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'entregas'
});

app.get ('/entregas',(req, res) => {
    let string = "select * from vw_entregas"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});
app.get ('/entregas/entregadores',(req, res) => {
    let string = "select * from entregadores"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});
app.get ('/entregas/pedidos',(req, res) => {
    let string = "select * from pedidos"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});
app.get ('/entregas/produtos',(req, res) => {
    let string = "select * from produtos"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});


app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});