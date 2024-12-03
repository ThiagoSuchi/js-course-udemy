// Atribuição via Destruturação - Objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Henrique Oliveira',
    idade: 35,
    endereco: {
        rua: 'Av Gaibrin',
        numero: '524B'
    }
};
// Se um dos elementos não existir passe uma condição para não ser imprimido undefined, no exmplo abaixo a condição é { nome = '' }
const { nome = '', sobrenome, idade } = pessoa
console.log(nome, sobrenome, idade);
