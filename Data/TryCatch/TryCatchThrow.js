// try: Um bloco de código onde você coloca as operações que podem gerar erros.
// catch: Um bloco que será executado se um erro ocorrer no try. Nele, você pode tratar o erro, exibir mensagens de alerta, ou tomar alguma ação para corrigir o problema.

try {
    console.log(constmundo);
} catch(e) {
    console.error(`Foi verficado algo inexistente ${e}`);
}

//  throw é usado em programação para lançar um erro ou uma exceção de forma manual. Ele interrompe a execução normal do código e transfere o controle para o bloco catch (caso esteja dentro de um try-catch) ou para o ambiente externo, onde o erro poderá ser tratado.

function somandoNums(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Os valores inseridos em x ou em y não são válidos! Insira valores do tipo number!');
    }

    return x + y;
}

// Tratando o erro Throw:
try{
    console.log(somandoNums(10, 35));
    console.log(somandoNums('oi', 6));
} catch(error) {
    console.log(error.message);
}