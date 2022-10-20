const express = require("express");
const cors = require("cors");
const mysql = require("mysql")

const conDB = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'lojinha'
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/produtos", (req,res) => {
    let query = "select * from produtos";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else{
            res.json(err).status(400).end();
        }
    });
});

app.get("/produtos/:cod", (req,res) => {
    let query = `select * from produtos WHERE cod = '${req.params.cod}';`

    conDB.query(query, (err, result) => {
        if(err == null){
            res.status(201).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    });

});



app.post("/produtos",(req, res) => {
    // req.query => http://localhost:3000/produtos?cod=ab1234&nome=teste
    // req.params => /produtos/:cod/:nome => http://localhost:3000/produtos?cod=ab1234&nome=teste
    // req.body => tem que criar um obj jason, ex: {
    //     "cod":"CA8754",
    //     "nome":"Camiseta Conforatavel",
    //     "qntd":15,
    //     "preco":30.90
    // }
    let query = `insert into produtos values (default,'${req.body.cod}', '${req.body.nome}', ${req.body.qntd}, ${req.body.preco})`;

    conDB.query(query, (err, result) => {
        if(err == null){
            res.status(281).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });

});

app.listen(3000, () => {
    console.log("APP ON")
});
