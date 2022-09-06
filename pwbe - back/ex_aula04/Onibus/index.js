const express = require("express");
const cors = require("cors");
const mysql = require("mysql")

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'onibus'
});

app.get ('/onibus',(req, res) => {
    let string = "select * from vw_onibus"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});
app.get ('/onibus/linhas',(req, res) => {
    let string = "select * from linhas"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});
app.get ('/onibus/mot_linhas',(req, res) => {
    let string = "select * from mot_linhas"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});
app.get ('/onibus/motoristas',(req, res) => {
    let string = "select * from motoristas"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});
app.get ('/onibus/horarios',(req, res) => {
    let string = "select * from horarios"
    con.query(string,(err,result) => {
        if(err == null) {
            res.json(result);
        }
    });
});





app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});