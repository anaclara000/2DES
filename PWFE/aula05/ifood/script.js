function criarElemento(){
    let itemLista = document.createElement("div");
    itemLista.className = "item-lista";

    let thumbnail = document.createElement("img");
    thumbnail.src = "./img/sinuca.jpg";
    thumbnail.id = "thumb";
    thumbnail.alt = "Foto do Restaurante";

    let like = document.createElement("img");
    like.src = "./img/coracao1.png"
    like.id = "like";
    like.alt = "Icone de coração"

    let avaliacao = document.createElement("img");
    avaliacao.src = "./img/estrela.png";
    avaliacao.id = "avaliacao";
    avaliacao.alt = "Avaliacao";

    let info = document.createElement("div");
    info.id = "info";

    let nomeRestaurante = document.createElement("p");
    nomeRestaurante.innerHTML = "Xurumelas Bar 2.0 Muito Mais Melhor do que antes";

    let textoAvaliacao = document.createElement("p");

    textoAvaliacao.appendChild(avaliacao);
    textoAvaliacao.append("4.9");

    info.appendChild(nomeRestaurante);
    info.appendChild(textoAvaliacao);

    itemLista.appendChild(thumbnail);
    itemLista.appendChild(info);
    itemLista.appendChild(like);

    document.querySelector(".lista").appendChild(itemLista);
}