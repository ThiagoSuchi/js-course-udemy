/* finally é um bloco opcional usado junto com try-catch. Ele é executado sempre, 
independente de um erro ter ocorrido ou não. */
try {
    console.log('Abri um arquivo');
    console.log(algumErro);
} catch(e) {
    console.log('Tratando erro');
} finally {
    console.log('Sempre sou executado!');
}

/* 
   É útil para realizar tarefas de limpeza
ou finalizar processos, como fechar conexões,
liberar recursos, ou exibir mensagens. 
*/

console.log('--------------------------------------------------');

function dataAtual(data) {
    if(data && !(data instanceof Date)){
        throw new Error('Não é uma data!');
    }

    if(!data) {
        data = new Date()
    }

    return data.toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    console.log(dataAtual());
    console.log(dataAtual(new Date()));
    console.log(dataAtual(eae));
} catch(e) {
    console.error(e.message);
} finally {
    console.log('Date');
}