const duplicatas = document.querySelector(".container_mae");
const clientes = document.querySelector(".container");
const modal = document.querySelector(".container2");

const telefones = document.querySelector(".infos")
const formTelefone = document.querySelector(".form-modal")

fetch("http://localhost:5000/clientes")
.then(resp => {return resp.json()})
.then(duplicatas => {
    duplicatas.forEach(clientes =>{
        addInfos(clientes);
    });
});

function showModal(){
    
    modal.classList.toggle("model");
    
}

function carregarTel(e){
    let newTel = document.getElementsByClassName("newTel")
    while (newTel[0]){
        newTel[0].parentNode.removeChild(newTel[0]);
    }
    fetch("http://localhost:5000/clientes")
    .then(resp => {return resp.json()})
    .then(duplicatas => {
        duplicatas.forEach(clientes =>{
            if (clientes.cod_cli == e.parentNode.querySelector("#codCli").innerHTML) {
                clientes.telefones.forEach(tel => {
                    addTelefones(tel);
                });
            }
            
        });
    });
    showModal()
}

function addTelefones(info) {
    let phones = telefones.cloneNode(true);
    // phones.classList.remove("model");
    phones.querySelector("#tipo").innerHTML = info.tipo;
    phones.querySelector("#numero").innerHTML = info.numero;
    phones.classList.add("newTel")
    formTelefone.appendChild(phones);
    console.log(phones);
}


function addInfos(info){
    let dupli = clientes.cloneNode(true);
    dupli.classList.remove("model");
    dupli.querySelector("#codCli").innerHTML = info.cod_cli;
    dupli.querySelector("#nome").innerHTML = info.nome;
    dupli.querySelector("#end").innerHTML = info.endereco;
    dupli.querySelector("#bairro").innerHTML = info.bairro;
    dupli.querySelector("#cidade").innerHTML = info.cidade;
    dupli.querySelector("#uf").innerHTML = info.uf;
    // dupli.querySelector("#telefones").innerHTML = info.telefones;
    duplicatas.appendChild(dupli);
}

const inputTipo = document.querySelector("#tipo");
inputTipo.disabled = true;

const inputNum = document.querySelector("#numero");
inputNum.disabled = true;

