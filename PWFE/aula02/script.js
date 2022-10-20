// //tagname, id, classname
// var texto = document.getElementsByTagName("h1");
// //console.log(texto);

// var titulo = document.getElementById("titulo");

// var aluno = {
//     nome: "Fulano",
//     matricula: 234578
// };

 //titulo.innerHTML = `Nome : ${aluno.nome} </br> Matricula : ${aluno.matricula} `;

// titulo.style.color = "green";
// //titulo.style.margin = "200px"

// var mensagem = document.getElementById("mensagem");

// mensagem.style.dispay = "block";

// var divisao = document.getElementsByClassName("divisao");

// // document.querySelector();
// // document.querySelectorAll();

// var titulo2 = document.querySelector("#titulo");
// var div = document.querySelectorAll(".divisao");
// var msg = document.querySelector("h1");

var busca = document.querySelector("#busca");
var linhas = document.querySelectorAll("tr");0
var btBusca = document.querySelector("button");

btBusca.addEventListener("click", buscarNome);
busca.addEventListener("keyup", buscarNome);

function buscarNome(){
    let encontrei = false;

    linhas.forEach(linha => { 
        let temp = linha.querySelector("td")
        if(temp != null){
            // if(temp.innerHTML.toLowerCase() == busca.value.toLowerCase()){
            //     alert("encontrado")
            //     encontrei = true;
            //     linha.style.fontWeight = "bold";
            //     linha.style.color= "pink";
            //} 

            if(temp.innerHTML.toLowerCase().includes(busca.value.toLowerCase())){
                linha.style.display = "table-row"; 
            }else{
                linha.style.display = "none";
            }
        }
    });


    // if (!encontrei) alert("Não econtrei");
}









