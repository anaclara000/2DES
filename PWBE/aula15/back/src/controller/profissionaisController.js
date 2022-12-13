const conDB = require('../dao/dbDentistas');
const Profissionais = require('../models/profissionais')

const listarProfissionais = (req, res) => {
    conDB.query(Profissionais.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};

const listarProfissional = (req, res) => {
    conDB.query(Profissionais.toRead(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};


module.exports = {
    listarProfissionais,
    listarProfissional
}