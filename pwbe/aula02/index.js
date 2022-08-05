const express = require('express');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
    user : 'root', 
    host : 'localhost',
    database : 'pedidos'
});

app.use(express.json());

app.get('/pedidos',(req, res)=>{
    
    let id = req.query.id;
    let nome = req.query.nome
    let endereco = req.query.endereco
    let telefone = req.query.telefone
    let numPedido = req.query.numPedido
    let dataPedido = req.query.dataPedido
    let valor = req.query.valor
    let descricao = req.query.descricao
    let string = `insert into clientes value(null,'${nome}','${endereco}','${telefone}')`;
    con.query(string,(err,result)=>{
        if(err == null){
            res.json("Dados reebidos com sucesso e enviandos para o nosso Banco de Dados");
        }else{
            res.json("Dados recebidos com sucesso, porém não foi possível enviar para o Banco de Dados")
        }

    });

    var meuInputIdNome = document.querySelector("#idNome");
    var resultado = document.querySelector("#resultadoId")

    var busca = document.querySelector("#buscaId");
    busca.addEventListener("click", buscarId);
    
    function buscarId(){
        if(meuInputIdNome.value != null){
                for(var i = 0; i < meuInputIdNome.value.length; i++){
                    if(meuInputIdNome.value == req.query.id){
                        alert()
                    }
                }
        }
    }

});

app.listen(3000,()=>{
    console.log("Respondendo na porta 3000");

});
