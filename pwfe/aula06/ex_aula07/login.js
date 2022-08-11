var backend = [
    
    {
		"usuarios":"ADM",
		"passwords":{
			"senha":"adm123",
		},
    },

    {
		"usuarios":"ana",
		"passwords":{
			"senha":"ana123",
		},
    },
]

var Usuario = document.querySelector("#username");
var Senha = document.querySelector("#password");
var Result = document.querySelector("#resposta");

function validarLogin(){
	backend.forEach(user =>{
			if(user.usuarios == Usuario.value && user.passwords.senha == Senha.value ){
				console.log("oi")
				window.location.href = "index.html"

			} else{	
				Login.querySelector("#resposta").innerHTML= "Usuário ou Senha inválidos";
				Login.querySelector("#resposta").style.color = "red";
			}


	});
    
}