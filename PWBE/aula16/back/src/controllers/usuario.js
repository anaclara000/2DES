const jwt = require('jsonwebtoken');

require('dotenv').config();

const login = (req, res) => {
    const user = req.body;


    const data = {
        "id": 1,
        "nome": "Fulano da Silva",
        "role": "admin"
    };

    jwt.sign(data, process.env.KEY, {expiresIn: '1m'},function (err, token) {
            if(err == null) {
                data["token"] = token;
                res.status(200).json(data).end();
            }else{
                res.status(404).json(data).end();
            }
        });
}


const remover = (req, res, next) => {
    const{id} = req.params;
    res.status(200).json({msg:"usuario deletado"}).end()
}
module.exports = {
    login,
    remover
}