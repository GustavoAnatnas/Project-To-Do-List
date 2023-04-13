let criaTarefa = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');
let botaoApaga = document.getElementById('apaga-tudo');
let botaoFinalizados = document.getElementById ('remover-finalizados')


function adiciona(){
    let texto = document.querySelector('#texto-tarefa').value;
    let lista = document.querySelector('#lista-tarefas').innerHTML;
    lista = lista + "<li class ='li'>" + texto + "</li>" ;
    document.querySelector("#lista-tarefas").innerHTML = lista;
    document.querySelector('#texto-tarefa').value = '';
}

function apaga(){
    let lista = document.querySelector('#lista-tarefas')
    lista.innerHTML= '';
}
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
    teste[index].classList.remove('color');
    }
    seleciona.classList.add('color');
}
lista.addEventListener('click', pintar);

function riscaTexto(event) {
    seleciona = event.target;
    seleciona.classList.toggle('completed')
}

lista.addEventListener('dblclick', riscaTexto)