const toCreate  = (model) =>{
    return `INSERT INTO tratamentos VALUES (DEFAULT, ${model.consulta}, '${model.tratamento}', '${model.valor}')`;
}

const toReadAll = () => {
return "SELECT * FROM tratamentos ORDER BY id_tratamento asc";
}

const toRead = (model) => {
return `SELECT * FROM tratamentos WHERE id_tratamento = ${model.id_tratamento}`;
}


const toDel = (model)=>{
return `DELETE FROM tratamentos WHERE id_tratamento = '${model.id_tratamento}'`;
}

const toUpdate = (model)=>{
return `UPDATE tratamentos SET consulta = ${model.consulta}, tratamento = '${model.tratamento}', valor = '${model.valor}' WHERE id_tratamento = '${model.id_tratamento}'`;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate,
toRead
}