
const toReadAll = () => {
return "SELECT * FROM profissionais ORDER BY id_profissional asc";
}

const toRead = (model) => {
    return `SELECT * FROM profissionais WHERE id_profissional = ${model.id_profissional}`;
    }
    

module.exports = {
toReadAll,
toRead
}