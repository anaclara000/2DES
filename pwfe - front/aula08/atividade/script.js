var respFetch = fetch("https://jsonplaceholder.typicode.com/todos")

respFetch.then((response) => {
    return response.json();
})
.then((data) => {
    data.forEach(cliente => {
        let minhaDiv = document.createElement("div");
        

        let idUsuario = document.createElement("h1");
        idUsuario.innerHTML = cliente.userId;
        let titulo = document.createElement("h1");
        titulo.innerHTML = cliente.title;
        let completo = document.createElement("h1");
        completo.innerHTML = cliente.completed;
        let meuinput = document.createElement("input");
        meuinput.type = 'checkbox';
        meuinput.classList.add("checkbox-rect");

        minhaDiv.appendChild(idUsuario);
        minhaDiv.appendChild(titulo);
        minhaDiv.appendChild(meuinput);
        
        meuinput.checked = cliente.completed;

        document.querySelector("body").appendChild(minhaDiv);

        idUsuario.classList.add("usuario");
        titulo.classList.add("titulo");
        meuinput.classList.add("check");
        
    })
})