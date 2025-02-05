// Em Programação Orientada a Objetos (POO), os métodos get e set são usados para acessar e modificar os atributos (ou propriedades) de uma classe. Eles são conhecidos como acessores (get) e modificadores (set) e ajudam a implementar o conceito de encapsulamento, que é um dos pilares da POO
//---------------------------------------------------------------------------------------------------------------------

// Symbol é um tipo de dado primitivo para criar identificadores únicos.
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
// set: Um método usado para definir ou modificar o valor de um atributo privado.
    set velocidade(valor) {
        console.log('SET');
        if(typeof valor !== 'number')return;
        if(valor >= 100 || valor <= 0)return;
        this[_velocidade] = valor
    }
// get: Um método usado para retornar o valor de um atributo privado
    get velocidade() {
        console.log('GET');
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const  c1 = new Carro('Onix');
c1.velocidade = 23;
console.log(c1.velocidade);
