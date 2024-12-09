const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas){
    console.log(i);// 0
    console.log(frutas);// ['Pera', 'Maçã', 'Uva']
    console.log(i, frutas[i]);// 0 Pera
    console.log('-------------------------');
};

// For in - lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Alberto',
    sobrenome: 'Silva Gomes',
    idade: 22,
};

for (let chave in pessoa){
    console.log(chave + ':', pessoa[chave]);
};

// OBS - For...in, funciona com objetos!