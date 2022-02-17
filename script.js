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
    pintar();
}
function pintar() {
    let li = document.querySelectorAll('.li');
    for (let index = 0; index < li.length; index++) {
    lis = li[index];
    
    lis.addEventListener('click', function(event){
        event.target.classList.add('color')
    });
    }  
    }
    