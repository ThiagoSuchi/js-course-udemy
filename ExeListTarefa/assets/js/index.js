const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi() {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
})

function criarTarefa(textoInput) {
    const li = criarLi();
    li.innerText = textoInput;
    tarefas.appendChild(li)
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;// Impede que adicione espaços em branco
    criarTarefa(inputTarefa.value)
})