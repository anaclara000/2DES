//Apenas analistas e desenvolvedores podem possuir Admin os demais são apenas leitores;
//Apenas cargos de nível 3 ou superior podem ser Admin;
//Cargos inferiores a 3 podem ser removidos da lista de acesso;

var menu = [
	{
		"img":"img/usuario.png",
		"funcionario":"Sancho Cedraz",
		"cargo":{
			"nome":"Analista",
			"nivel":2
		},
		"autorizado":true
	},		
	{
		"img":"img/usuario.png",
		"funcionario":"Ionara Pederneiras",
		"cargo":{
			"nome":"Técnico",
			"nivel":2
		},
		"autorizado":true
	},
	{
		"img":"img/usuario.png",
		"funcionario":"Filipe Castanho",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":1
		},
		"autorizado":false
	},
	{
		"img":"img/usuario.png",
		"funcionario":"Lívia Bicalho",
		"cargo":{
			"nome":"Analista",
			"nivel":3
		},
		"autorizado":true
	},
	{
		"img":"img/usuario.png",
		"funcionario":"Mauro Varanda",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":3
		},
		"autorizado":false
	},	
	{
		"img":"img/usuario.png",
		"funcionario":"Sandro Rosário",
		"cargo":{
			"nome":"Técnico",
			"nivel":3
		},
		"autorizado":true
	}
];

var itemMenu = document.querySelector(".item-menu");

function carregar(){
	menu.forEach(item => {
		let novoItem = itemMenu.cloneNode(true);

		novoItem.classList.remove("modelo")

			novoItem.querySelector("#img-item").src= item.img;
			novoItem.querySelector("#nome-funcionario").innerHTML= item.funcionario;
			novoItem.querySelector("#nome-cargo").innerHTML= item.cargo.nome;
			novoItem.querySelector("#nivel").innerHTML=item.cargo.nivel;
			
			if(item.autorizado){
				novoItem.querySelector("#autorizado").innerHTML= "Autorizado";
				novoItem.querySelector("#autorizado").style.color = "green";
			}else{
				novoItem.querySelector("#autorizado").innerHTML= "Não autorizado";
				novoItem.querySelector("#autorizado").style.color = "red";
			}

			if(item.cargo.nivel >= 3){
				novoItem.querySelector("#botao").disabled = true;

			}

			document.querySelector(".menu").appendChild(novoItem);
	});
}

function removerItem(e){
    e.parentNode.remove();
}