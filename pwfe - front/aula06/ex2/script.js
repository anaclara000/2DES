var carrinho = [
    {
        "img":"img/tenis.png",
        "nome":"Tênis Naique Air Jordão",
        "qntd":2
    },
    {
        "img":"img/chinelo.png",
        "nome":"Chinelo Ardidas",
        "qntd":1
    },
    {
        "img":"img/bermuda.png",
        "nome":"Bermuda Pulma",
        "qntd":3
    },
    {
        "img":"img/camiseta.png",
        "nome":"Camisa LaCosta",
        "qntd":5
    }
            
];

var itemCarrinho = document.querySelector(".item-carrinho");

function carregar(){
    carrinho.forEach(item => {
    let novoItem = itemCarrinho.cloneNode(true);

    novoItem.classList.remove("modelo")
    
        novoItem.querySelector("#img-item").src= item.img;
        novoItem.querySelector("#nome-item").innerHTML = item.nome;
        novoItem.querySelector("#qntd-item").value = item.qntd;
        
        document.querySelector(".carrinho").appendChild(novoItem);
    });
}

function removerItem(e){
    e.parentNode.remove();
}