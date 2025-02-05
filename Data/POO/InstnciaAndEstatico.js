class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentaVolume() {
        this.volume += 2;
    }
    // Método de instância - Depende de uma instância da classe para ser chamado e manipula suas propriedades.
    diminuirVolume() {
        this.volume -= 2;
    }
    // Método estático - Pertence à classe, é chamado diretamente nela e não depende de nenhuma instância.
    static trocarPilha() {
        console.log('Pilha trocada!');
        
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
console.log(controle1);
// Para chamar o método estático, é preciso chamar diretamente a class
ControleRemoto.trocarPilha();

