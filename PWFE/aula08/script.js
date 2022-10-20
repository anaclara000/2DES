var usuarios = [
    {
        "nome":"fulano da Silva",
        "img": "http...",
        "login": "fulano",
        "senha":"12345"
    },
    {
        "nome":"fulano da Silva",
        "img": "http...",
        "login": "ciclanp",
        "senha":"12345"
    },
    {
        "nome":"fulano da Silva",
        "img": "http...",
        "login": "beltrano",
        "senha":"12345"
    },

]




function salvar(){
    let infoUser = [
        {
            "id":1,
            "produto":"teste"
        },
        {
            "id":2,
            "produto":"teste"
        }
    ];
        
    // PARA CONVERTER O OBJ JSON PARA STRING
    let infoTexto = JSON.stringify(infoUser); 

    window.localStorage.setItem("userData", infoTexto);
}

function carregar(){
    let info = window.localStorage.getItem("userData");
    // CONVERTENDO STRING EM JSON DNV
    let objUser = JSON.parse(info);
    console.log(objUser);
    console.log(info);
}

function apagar(){
    // REMOVENDO UMA INFO ESPECIFICA
    let info = window.localStorage.removeItem("userData");
    let objUser = JSON.parse(info);

    objUser.pop();

    window.localStorage.setItem("userData", JSON.stringify(objUser));

    // REMOVENDO TUDO QUE CRIEI
    // window.localStorage.clear();
}

function login(){
    let usuario = "fulano";
    let senha = "12345";

    usuarios.forEach(user => {
        if(user.login == usuario && user.senha == senha){
            console.log(user);
            window.localStrorage.setItem("dadosDoUsuario", JSON.stringify(user));
        }
    })
}