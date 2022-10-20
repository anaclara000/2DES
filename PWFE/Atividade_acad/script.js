var respFetch = fetch("http://localhost:5000/academia")

respFetch.then((response) => {
    return response.json();
})
.then((academia) => {
    let minhaDiv1 = document.createElement("div");
        document.querySelector("body").appendChild(minhaDiv1);
    academia.forEach(usuario => {
         let minhaDiv2 = document.createElement("div");
            let img = document.createElement("img");
            img.src = "./img/user.png"
            let id = document.createElement("p");
            id.innerHTML = usuario.id_aluno;
            let nome = document.createElement("p");
            nome.innerHTML = usuario.nome;
            let nasci = document.createElement("p");
            nasci.innerHTML = usuario.nascimento;
            let sexo = document.createElement("p");
            sexo.innerHTML = usuario.sexo;
            let peso = document.createElement("p");
            peso.innerHTML = usuario.peso;
            let telefone = document.createElement("p");
            telefone.innerHTML = usuario.telefone;
            minhaDiv1.appendChild(minhaDiv2);
            minhaDiv2.appendChild(img);
            minhaDiv2.appendChild(id);
            minhaDiv2.appendChild(nome);
            minhaDiv2.appendChild(nasci);
            minhaDiv2.appendChild(sexo);
            minhaDiv2.appendChild(peso);
            minhaDiv2.appendChild(telefone);

        minhaDiv1.classList.add("container_mae");
        minhaDiv2.classList.add("container");
       
    });
    
});


var respFetch2 = fetch("http://localhost:5000/academia/aparelhos")

respFetch2.then((response) => {
    return response.json();
})
.then((academia) => {
    let minhaDiv1 = document.createElement("div");
        document.querySelector("body").appendChild(minhaDiv1);
            let titulo2 = document.createElement("div");
                let img = document.createElement("img");
                    img.src = "./img/peso.png"
                let string = document.createElement("p");
                string.innerHTML = "Equipamentos";

                minhaDiv1.appendChild(titulo2);
                titulo2.appendChild(img);
                titulo2.appendChild(string);

            img.classList.add("peso");
            titulo2.classList.add("titulo2");
            string.classList.add("equipamentos");


    academia.forEach(aparelhos => {
        let minhaDiv2 = document.createElement("div");
            
            let idAparelho = document.createElement("p");
            idAparelho.innerHTML = aparelhos.id_aparelho; 
            let nomeAparelho = document.createElement("p");
            nomeAparelho.innerHTML = aparelhos.nome; 

            minhaDiv1.appendChild(minhaDiv2);
            minhaDiv2.appendChild(idAparelho);
            minhaDiv2.appendChild(nomeAparelho);
            
            minhaDiv1.classList.add("container_mae2");
            minhaDiv2.classList.add("container2");
            idAparelho.classList.add("aparelhoID");
    });
    
});

var respFetch3 = fetch("http://localhost:5000/academia/exercicios")

respFetch3.then((response) => {
    return response.json();
})
.then((academia) => {
    let minhaDiv1 = document.createElement("div");
    document.querySelector("body").appendChild(minhaDiv1);
        let titulo2 = document.createElement("div");
            let img = document.createElement("img");
                img.src = "./img/ex.png"
            let string = document.createElement("p");
            string.innerHTML = "Exercicios";

            minhaDiv1.appendChild(titulo2);
            titulo2.appendChild(img);
            titulo2.appendChild(string);

        img.classList.add("ex");
        titulo2.classList.add("titulo3");
        string.classList.add("exercicios");
        academia.forEach(exercicios => {
            let minhaDiv2 = document.createElement("div");
                let idExercicio = document.createElement("p");
                idExercicio.innerHTML = exercicios.id_exercicio;
                let descricao = document.createElement("p");
                descricao.innerHTML = exercicios.descricao;
                let grupoMuscular = document.createElement("p");
                grupoMuscular.innerHTML = exercicios.grupo_muscular;
                let idAparelho = document.createElement("p");
                idAparelho.innerHTML = exercicios.id_aparelho;

            minhaDiv1.appendChild(minhaDiv2);
            minhaDiv2.appendChild(idExercicio);
            minhaDiv2.appendChild(descricao);
            minhaDiv2.appendChild(idAparelho);

            minhaDiv1.classList.add("container_mae3");
            minhaDiv2.classList.add("container2");
            idAparelho.classList.add("aparelhoID");
            idExercicio.classList.add("exercicioID");
    });
    
});

var respFetch3 = fetch("http://localhost:5000/academia/fichas")

respFetch3.then((response) => {
    return response.json();
})
.then((academia) => {
    let minhaDiv1 = document.createElement("div");
    document.querySelector("body").appendChild(minhaDiv1);
        let titulo2 = document.createElement("div");
            let img = document.createElement("img");
                img.src = "./img/fichas.png"
            let string = document.createElement("p");
            string.innerHTML = "Ficha de treino";

            minhaDiv1.appendChild(titulo2);
            titulo2.appendChild(img);
            titulo2.appendChild(string);

        img.classList.add("ex");
        titulo2.classList.add("titulo3");
        string.classList.add("exercicios");
        academia.forEach(fichas => {
            let minhaDiv2 = document.createElement("div");
                let alunoId = document.createElement("p");
                alunoId.innerHTML = fichas.id_aluno;
                let exercicioId = document.createElement("p");
                exercicioId.innerHTML = fichas.id_exercicio;
                let diaSemana = document.createElement("p");
                diaSemana.innerHTML = fichas.dia_semana;
                let serie = document.createElement("p");
                serie.innerHTML = fichas.serie;

            minhaDiv1.appendChild(minhaDiv2);
            minhaDiv2.appendChild(alunoId);
            minhaDiv2.appendChild(exercicioId);
            minhaDiv2.appendChild(diaSemana);
            minhaDiv2.appendChild(serie);

            minhaDiv1.classList.add("container_mae4");
            minhaDiv2.classList.add("container4");
            alunoId.classList.add("aparelhoID");
            exercicioId.classList.add("exercicioID");
        });
    
    });

