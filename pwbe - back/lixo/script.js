// var respFetch = fetch("http://localhost:5000/clientes")

// respFetch.then((response) => {
//     return response.json();
// })
// .then((duplicata) => {
//     let minhaDiv1 = document.createElement("div");
//         document.querySelector("body").appendChild(minhaDiv1);
//         let divHead = document.createElement("div");
//             let headTabela = document.createElement("thead");
//             let stringCod = document.createElement("th");
//             stringCod.innerHTML = "Cód";
//             let stringNome = document.createElement("th");
//             stringNome.innerHTML = "Nome";
//             let stringEnd = document.createElement("th");
//             stringEnd.innerHTML = "Endereço";
//             let stringBairro = document.createElement("th");
//             stringBairro.innerHTML = "Bairro";
//             let stringCidade = document.createElement("th");
//             stringCidade.innerHTML = "Cidade";
//             let stringUF = document.createElement("th");
//             stringUF.innerHTML = "UF";
//             let stringTel = document.createElement("th");
//             stringTel.innerHTML = "Telefone";
//             minhaDiv1.appendChild(divHead);
//             divHead.appendChild(headTabela);
//             headTabela.appendChild(stringCod);
//             headTabela.appendChild(stringNome);
//             headTabela.appendChild(stringEnd);
//             headTabela.appendChild(stringBairro);
//             headTabela.appendChild(stringCidade);
//             headTabela.appendChild(stringUF);
//             headTabela.appendChild(stringTel);

//             headTabela.classList.add("container2");
//             divHead.classList.add("model")

//     duplicata.forEach(cliente => {
//         let divBody = document.createElement("div");
//             let bodyTabela = document.createElement("tbody");
//             let cod = document.createElement("td")
//             cod.innerHTML = cliente.cod_cli;
//             let clienteNome = document.createElement("td")
//             clienteNome.innerHTML = cliente.nome;
//             let end = document.createElement("td")
//             end.innerHTML = cliente.endereco;
//             let clienteBairro = document.createElement("td")
//             clienteBairro.innerHTML = cliente.bairro;
//             let clienteCidade = document.createElement("td")
//             clienteCidade.innerHTML = cliente.cidade;
//             let clienteUF = document.createElement("td")
//             clienteUF.innerHTML = cliente.uf;
//             let tel = document.createElement("td")
//             tel.innerHTML = cliente.telefones;

//             // let modal_model = document.createElement("div")
//             //     let formModal = document.createElement("div")
//             //         let formTipo = document.createElement("input")
//             //         let formTel = document.createElement("input")
            

//         minhaDiv1.appendChild(divBody);
//         divBody.appendChild(bodyTabela);
//         bodyTabela.appendChild(cod);
//         bodyTabela.appendChild(clienteNome);
//         bodyTabela.appendChild(end);
//         bodyTabela.appendChild(clienteBairro);
//         bodyTabela.appendChild(clienteCidade);
//         bodyTabela.appendChild(clienteUF);
//         bodyTabela.appendChild(tel);
//         minhaDiv1.classList.add("container_mae");
//         bodyTabela.classList.add("container");
//         divBody.classList.add("model")


//         // bodyTabela.appendChild(modal_model);
//         // modal_model.appendChild(formModal);
//         // formModal.appendChild(formTipo);
//         // formModal.appendChild(formTel);
       
//         // formModal.classList.add("modal");
//         // divBody.classList.remove("model");
//         // modal_model.classList.remove("model");
//     });
// });

// const modal = document.querySelector(".modal");

// function showModal(){
//     modal.classList.toggle("model");
    
// }