// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //aca guardar lista amigos

function agregarAmigo(){
    let input = document.getElementById("amigo"); 
    // console.log(input.value);
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado");
        return;
    }

    amigos.push(nombre);
    console.log(amigos);
    mostrarLista();
    input.value = "";
}

function mostrarLista(){
    let i = 0;
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
       
    }
    
}
function sortearAmigo(){
    if (amigos.length === 0) {
        alert("Por favor, inserte un nombre");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}



