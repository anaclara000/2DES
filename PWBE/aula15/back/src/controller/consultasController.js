const conDB = require('../dao/dbDentistas');
const Consultas = require('../models/consultas')

const listarConsultas = (req, res) => {
    conDB.query(Consultas.toReadAll(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.status(500).end();
        }
    })
};


module.exports = {
    listarConsultas
}