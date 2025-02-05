class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + " " +'já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(this.ligado) {
            console.log(this.nome + " " +'já desligado!');
            return;
        }
        this.ligado = false;
    }
}

// A classe Notbook (o nome correto seria "Notebook") herda da classe DispositivoEletronico, o que significa que ela possui todas as propriedades e métodos da classe base, além de suas próprias definições.
class Notbook extends DispositivoEletronico {
    constructor(nome, modelo, cor) {
    // o método super chama o construtor da classe base        
        super(nome)
        this.modelo = modelo;
        this.cor = cor;
    }
}

// Aqui é criado um novo objeto para a class
const n1 = new Notbook('Acer', 'Aspire 5 - A515-45-R36L', 'Preto');
n1.ligar();
console.log(n1);
n1.ligar();
// A classe derivada (Notbook) adiciona detalhes específicos de um notebook.

// ⚠️OBS - É possível sobrescrever métodos!⚠️


