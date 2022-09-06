const produtos = document.querySelector(".produtos");
const produto = document.querySelector(".produto");
const modal = document.querySelector(".modal");

fetch("http://localhost:3000/produtos")
.then(resp => {return resp.json()})
.then(produtos => {
    produtos.forEach(produto =>{
        duplicarProduto(produto);
    });
});

function cadastrar(){
    let cod = document.querySelector("#cod").value;
    let nome = document.querySelector("#nnome").value;
    let qntd = document.querySelector("#qntd").value;
    let preco = document.querySelector("#ppreco").value;

    let produtosCad = JSON.stringify({
        "cod": cod,
        "nome": nome,
        "qntd": qntd,
        "preco": preco
    });

    fetch("http://localhost:3000/produtos", {
        "method":"POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body":produtosCad
    })
    .then(resp => {return resp.json()})
    .then(data => {
        duplicarProduto(data);
        showModal();
    })
}

function showModal(){
    modal.classList.toggle("model");
    
}
function duplicarProduto(info){
    let nProd = produto.cloneNode(true);

    nProd.classList.remove("model");

    nProd.querySelector("#nome").innerHTML = info.nome;
    nProd.querySelector("#preco").innerHTML = info.preco;

    produtos.appendChild(nProd);
}