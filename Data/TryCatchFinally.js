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
