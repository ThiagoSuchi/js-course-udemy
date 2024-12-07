// Atribuição via Destruturação - Objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Henrique Oliveira',
    idade: 35,
    endereco: {
        rua: 'Av Graibin',
        numero: '524B'
    }
};

// Atribuição via desestruturação com rest operator
const {nome, sobrenome, ...resto} = pessoa
console.log(nome, resto);


// Atribuição via desestruturação com endereço
const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero);


// Se um dos elementos não existir passe uma condição para não ser imprimido undefined, no exmplo abaixo a condição é { nome = '' }
const { nome: n = '', sobrenome: s = '', idade: i = '' } = pessoa
console.log(n, s, i);
