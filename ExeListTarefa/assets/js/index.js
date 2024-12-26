const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// Criando uma li para adicionar na ul tarefas
function criarLi() {
    const li = document.createElement('li')
    return li
}

// Verificando se o botão enter é clicado, se for, a tarefa é adicionada
inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
})

// Input apaga automaicamente após add a tarefa
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Botão que para apagar tarefa
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);
}

// Criando a tarefa
function criarTarefa(textoInput) {
    const li = criarLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

// Verificando se o input tem algum valor
btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;// Impede que adicione espaços em branco
    criarTarefa(inputTarefa.value)
})

// Apagando tarefas  criadas
document.addEventListener('click', function(e) {
    const el = e.target
    if(el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefa()
    }
})

// Salva o o valor do input no localStorage
function salvarTarefa() {
    const liTarefa = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for(let tarefa of liTarefa){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON)
}

// Garante que o valor salvo no localStorage permaneça na li mesmo após recarregar a página
function adicionaTarefasSalva() {
    const tarefas = localStorage.getItem('tarefas');
    const listDeTarefas = JSON.parse(tarefas)
    
    for(let tarefa of listDeTarefas) {
        criarTarefa(tarefa)
    }
}

adicionaTarefasSalva()