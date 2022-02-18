//Desafio8, consultei o repositório do Ezequiel Verissimo Tribo 15-B, estava tendo uma linha de pensamento parecida, mas não conseguia executar de forma que funcionasse
//no caso, adicionei a let seleciona com valor de event.target como ele fez. E mágicamente funcionou.
// Link Referência : "https://github.com/tryber/sd-015-b-project-todo-list/pull/16/commits/68b309d80bcac16ccbd639c3faf94677e9a4c29d"

let criaTarefa = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');


function adiciona(){
    // id="texto-tarefa" == imput
    // id="lista-tarefas" ==lista
    let texto = document.querySelector('#texto-tarefa').value;
    let lista = document.querySelector('#lista-tarefas').innerHTML;
    lista = lista + "<li class ='li'>" + texto + "</li>" ;
    document.querySelector("#lista-tarefas").innerHTML = lista;
    document.querySelector('#texto-tarefa').value = '';
}
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

function riscaTexto(event) {
    seleciona = event.target;
    let riscado = document.querySelectorAll('.li');

    // for (let index = 0; index < riscado.length; index++) {
    // textoRiscado = riscado[index];
    if(seleciona.classList.contains('completed')){
        seleciona.classList.remove('completed')
    }
    else{
        seleciona.classList.add('completed');
    }
}
//}
lista.addEventListener('dblclick', riscaTexto)
