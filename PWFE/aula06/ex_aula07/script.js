var menu = [
    {
        "img": "img/moletom.png",
        "descricao":"Moletom de borboletas",
        "preco":{
            "total":"R$ 67,95",
            "parcela":"ou 6x de R$11,33"
        },
},
{ 
        "img": "img/moletom1.png",
    "descricao":"Moletom de cogumelos",
    "preco":{
        "total":"R$ 85,90",
        "parcela":"ou 6x de R$14,32"
    },
},
       
{
    "img": "img/moletom2.png",
    "descricao":"Suéter de cogumelo",
    "preco":{
        "total":"R$ 64,99",
        "parcela":"ou 6x de R$10,83"
    },
},
{
        "img": "img/camisa1.png",
        "descricao":"Camiseta de anime",
        "preco":{
            "total":"R$ 10,00",
            "parcela":"ou 10x de R$1"
    },
},
{
    "img": "img/short1.png",
    "descricao":"Short preto jeans",
    "preco":{
        "total":"R$ 329,00",
        "parcela":"ou 8x de R$41,13"
    },
},
{
        "img": "img/short2.png",
        "descricao":"Short jeans desfiado",
        "preco":{
            "total":"R$ 89,99",
            "parcela":"ou 89x de R$1"
    },
},

{
    "img": "img/short3.png",
    "descricao":"Short jeans verão",
    "preco":{
        "total":"R$ 69,89",
        "parcela":"ou 6x de R$12,13"
    },
},
{
        "img": "img/calca1.png",
        "descricao":"Calça moletom bege",
        "preco":{
            "total":"R$ 298,78",
            "parcela":"ou 7x de R$31,13"
    },
},
{
    "img": "img/calca2.png",
    "descricao":"Calça moletom cinza",
    "preco":{
        "total":"R$ 145,78",
        "parcela":"ou 5x de R$23,13"
    },
},

    
]

var itemMenu = document.querySelector(".item-menu");

function carregar(){
	menu.forEach(item => {
        let novoItem = itemMenu.cloneNode(true);

	novoItem.classList.remove("modelo")

		novoItem.querySelector("#img-item").src = item.img;
		novoItem.querySelector("#nome-descricao").innerHTML = item.descricao;
		novoItem.querySelector("#preco-total").innerHTML = item.preco.total;
		novoItem.querySelector("#parcela").innerHTML = item.preco.parcela;

		document.querySelector(".menu").appendChild(novoItem);
    });

}

function addCarrinho () {
    console.log(menu);
    

}

var btAddCarrinho = document.querySelector("#btSelecionar");  
for(var i = 0; i < btAddCarrinho; i++){
    btAddCarrinho[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
            menu[key].quantidade++;
            addCarrinho();
            return false;
    })
}