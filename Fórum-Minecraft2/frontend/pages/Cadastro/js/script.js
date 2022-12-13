uriUsuarios = 'http://localhost:3000/Usuarios'
const s = document.querySelector('.s');
const b = document.querySelector('.b')
 teste = []
    

//    function ler(e){
//     teste.forEach(a => { 
//         var list = b.cloneNode(true)
//         list.querySelector(".teste").innerHTML = a.nickname;
//         s.appendChild(list)

//       }) 
//    }

function ativarFetcheCadastro() {
    const options2 = {method: 'GET'};

    fetch('http://localhost:3000/Usuarios', options2)
      .then(response => response.json())
      .then(data => {
        teste = data
        cad()

      })
} 

var UserDiferente = false
var EmailDiferente = false

var fazerFetch = false

function cad(e) {


    
    
    let Users = document.querySelector('.b').value
    let inptNome = document.querySelector("#nome").value;
    let inptNick = document.querySelector("#nick").value;
    let inptEmail = document.querySelector("#email").value;
    let inptSenha = document.querySelector("#senha").value;
    let inptSenhaConfirm = document.querySelector("#confirmSenha").value;



    teste.forEach(u => {

        if(u.nickname == inptNick) {
            UserDiferente = true

        }

        if(u.email == inptEmail) {
            EmailDiferente = true

        }
    })

    
    if(inptNome == "" || inptNick == "" || inptEmail == "" || inptSenha == ""){
        abrirModalUpdate()
    }else if(inptSenhaConfirm !== inptSenha){
        abrirModalSenha()
    }else if(UserDiferente == true || EmailDiferente == true) {
        alert("Usuario ja existe")
        window.location.reload()
    }else{
        let options = JSON.stringify({
            "nome_user": inptNome,
            "nickname": inptNick,
            "email": inptEmail,
            "senha": inptSenha,
            "status_user": "usuario"
        })

        fetch("http://localhost:3000/Usuarios", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": options
        })
            .then(res => {
                if(res.status == 201){
                    var modalCerto = document.querySelector('.modal-certo')
                    modalCerto.classList.remove('model')
                setTimeout(() => {
                    esconderModalCheck()
                    // window.location.href = '../../Login/index.html'
                }, 2200)
                
                }
            })
    }

    }

        


    

function esconderModalCheck() {
    var modalCerto = document.querySelector('.modal-certo')

    modalCerto.classList.add('model')
}

function esconderModalError() {
    var modalErro = document.querySelector('.modal-errado')

    modalErro.classList.add('model')

}

function abrirModalUpdate(){
    var confirmar = document.querySelector(".confirm")
    confirmar.classList.toggle('tela4')
}


function abrirModalSenha(){
    var senha = document.querySelector(".senhas")
    senha.classList.toggle('tela5')
}