// const uri = "http://localhost:3000/patrimonio/itens/";
// const corpo = document.querySelector("#corpo");
// var itens = [];


// const carregar = () => {
//     const options = {method: 'GET'};
//     fetch(uri, options)
//         .then(res => res.json())
//         .then(res => {
//             itens = res;
//             preencheTabela();
//         })
//         .catch(err => console.error(err));
// }
    
// const preencheTabela = () => {
//     itens.forEach(e=>{
//         let card = document.querySelector(".card").cloneNode(true);
//         card.classList.remove('model');
//         card.querySelector("#ni").innerHTML += e.ni;
//         card.querySelector("#aquisicao").innerHTML += e.aquisicao;
//         card.querySelector("#denominacao").innerHTML += e.denominacao;
//         card.querySelector("#valor").innerHTML += e.valor;
//         card.querySelector("#img").src = '../docs/assets/' + e.img;
//         card.querySelector("#del").setAttribute('onclick',`del(${e.ni})`);
//         corpo.appendChild(card);
//     });
// }

// const del = (ni) => {
//     const options = { 
//         method: 'DELETE',
//     };
//     if(confirm("Tem certeza que quer excluir o item " + ni)){
//         fetch(uri+ni, options)
//         .then(res => res.status)
//         .then(res => {
//             if(res == 204)
//             window.location.reload();
//         })
//         .catch(err => console.error(err));
//     }
    
   
// }

// const btCadedit = document.querySelector("#cadedit");
// const listaCadastro = document.querySelector("#lista-cad")
// const linhamodelo = document.querySelector(".linhamodelo");
// const inputAquisicao = document.querySelector("#data");
// const inputNome = document.querySelector("#deno");
// const inputValor = document.querySelector("#valor");

// function abrirModalCadastro() {
//     btCadedit.innerHTML = "Cadastrar";
//     btCadedit.onclick = () => { cadastrarPatrimonio(); }
//     inputAquisicao.value = "";
//     inputNome.value = "";
//     inputValor.value = "";
//     // modalEditar.classList.remove("model");
// }

// function cadastrarPatrimonio() {
//     let data = {
//         "aquisicao": inputAquisicao.value,
//         "denominacao": inputNome.value,
//         "valor": inputValor.value,
//         // "img": 
//     };

//     fetch(uri, {
//         "method":"POST",
//         "headers": {
//             "Content-Type": "application/json"
//         },
//         "body": JSON.stringify(data)
//     })
//     .then(res => {return res.json()})
//     .then(resp => {
//         if(resp.valor !== undefined){
//             alert("Produto Cadastrado Com Sucesso !");
//             window.location.reload();
//         }else {
//             alert("Falha ao cadastrar produto");
//         }
//      })
// }