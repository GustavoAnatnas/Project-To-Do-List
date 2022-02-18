//Desafio8, consultei o repositório do Ezequiel Verissimo Tribo 15-B, estava tendo uma linha de pensamento parecida, mas não conseguia executar de forma que funcionasse
//no caso, adicionei a let seleciona com valor de event.target como ele fez. E mágicamente funcionou.
// Link Referência : "https://github.com/tryber/sd-015-b-project-todo-list/pull/16/commits/68b309d80bcac16ccbd639c3faf94677e9a4c29d"

let criaTarefa = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');
let botaoApaga = document.getElementById('apaga-tudo');
let botaoFinalizados = document.getElementById ('remover-finalizados')


function adiciona(){
    // id="texto-tarefa" == imput
    // id="lista-tarefas" ==lista
    let texto = document.querySelector('#texto-tarefa').value;
    let lista = document.querySelector('#lista-tarefas').innerHTML;
    lista = lista + "<li class ='li'>" + texto + "</li>" ;
    document.querySelector("#lista-tarefas").innerHTML = lista;
    document.querySelector('#texto-tarefa').value = '';
}

function apaga(){
    let lista = document.querySelector('#lista-tarefas')
    lista.innerText= '';
}
// botaoApaga.addEventListener('click', apaga);
document.getElementById('apaga-tudo').addEventListener('click', apaga);


function apagaFinalizados(){
    let finalizados = document.querySelectorAll('.completed')
    for (i=0; i < finalizados.length; i++)
    finalizados[i].remove();
    
}
botaoFinalizados.addEventListener('click', apagaFinalizados)


function pintar(event) {
    let seleciona = event.target;
    let teste = document.querySelectorAll('.li');
    
    for (let index = 0; index < teste.length; index++) {
    lis = teste[index];
    lis.classList.remove('color');
    }
    seleciona.classList.add('color');
}
lista.addEventListener('click', pintar);

//Soluções para exercicio 9 .58
function riscaTexto(event) {
    seleciona = event.target;
    if(seleciona.classList.contains('completed')){
        seleciona.classList.remove('completed')
    }
    else{
        seleciona.classList.add('completed');
    }
}
lista.addEventListener('dblclick', riscaTexto)

// function riscaTexto(event) {
//     seleciona = event.target;
//     seleciona.classList.toggle('completed')
// }

// lista.addEventListener('dblclick', riscaTexto)

