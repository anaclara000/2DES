const mysql = require('mysql');
const cli = require("./src/clientes.js");

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "pizzaria"
});

function listarCliente(req, res) {
    let query = `SELECT * FROM vw_clientes`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(cli.clientes(result)).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listaCliente(req, res) {
    let query = `SELECT * FROM vw_clientes WHERE nome = '${req.params.nome}'`;
    
    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrarCliente(req, res) {
    let query = `INSERT INTO Clientes VALUES (DEFAULT, '${req.body.Cliente_id}', '${req.body.nome}', '${req.body.logradouro}', ${req.body.numero}, '${req.body.complemento}', '${req.body.bairro}', '${req.body.referencia}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function excluirCliente(req, res) {
    let query = `DELETE FROM Clientes WHERE nome = '${req.body.nome}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

function editarCliente(req, res){
    let query = `UPDATE Clientes SET nome = '${req.body.nome}', logradouro = '${req.body.logradouro}', numero = ${req.body.numero}, complemento = '${req.body.complemento}', bairro = '${req.body.bairro}', referencia = '${req.body.referencia}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarCliente,
    listaCliente,
    cadastrarCliente,
    excluirCliente,
    editarCliente
}