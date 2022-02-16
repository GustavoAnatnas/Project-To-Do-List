let criaTarefa = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');


function adiciona(){
    // id="texto-tarefa" == imput
    // id="lista-tarefas" ==lista
    let texto = document.querySelector('#texto-tarefa').value;
    let lista = document.querySelector('#lista-tarefas').innerHTML;

    lista = lista + "<li>" + texto + "</li>" ;
    document.querySelector("#lista-tarefas").innerHTML = lista;
    document.querySelector('#texto-tarefa').value = '';
}
