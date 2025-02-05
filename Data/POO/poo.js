// Em JavaScript, uma classe serve para criar objetos com comportamentos específicos (métodos).
class Pessoa {
    constructor(nome,sobrenome) {
        // A palavra-chave this é usada dentro do construtor para se referir à instância atual do objeto.
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
// Esses métodos são funções associadas à classe, que definem o comportamento do objeto criado a partir da classe.
    falar() {
        console.log(`${this.nome} está falando!`);
    }
    comer() {
        console.log(`${this.nome} está comendo!`);
    }
    beber() {
        console.log(`${this.nome} está bebendo água!`);
    }
}

// A palavra-chave new é usada para criar instâncias de uma classe. Cada vez que você usa new Pessoa(), você está criando um novo objeto da classe Pessoa com os valores passados para o construtor.
const p1 = new Pessoa("Jesus", "Cristo");
const p2 = new Pessoa("Matheus", "O cobrador");
const p3 = new Pessoa("Pedro", "Simão");
const p4 = new Pessoa("Judas", "Iscariotes");
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
p1.falar();
p2.comer();
p3.beber();
p4.comer();

// Dentro da classe, temos um método especial chamado constructor. Ele é chamado automaticamente quando você cria uma instância da classe (ou seja, um objeto da classe). O constructor é onde você inicializa as propriedades do objeto.


