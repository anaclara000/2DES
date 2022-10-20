const express = require('express');
const app = express();

app.use(express.json());

app.get('/aula03',(req, res)=>{
    res.json("aaaaaaaaaaaa");
});

app.listen(3000,()=>{
    console.log("Respondendo na porta 3000");

});