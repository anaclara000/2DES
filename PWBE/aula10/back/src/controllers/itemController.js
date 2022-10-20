const Solicitacoes = require('../models/solicitacao');
const con = require('../models/DAO');

const todas = (req, res) => {
    con.query(Solicitacoes.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const umItem = (req, res) => {
    con.query(Solicitacoes.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            if (err.sqlState == 23000)//Se a n_sol já está cadastrada
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

module.exports = {
    todas,
    umItem
}