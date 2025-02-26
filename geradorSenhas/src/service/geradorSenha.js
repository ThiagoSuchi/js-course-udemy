// Gera um valor aleatório entre min e max
const rand = (min, max) => Math.floor(Math.random() * (min - max) + max);

// fromCharCode - converte valores numéricos em caracteres.
const gerarMaiusculo = () => String.fromCharCode(rand(65, 91));
const gerarMinusculo = () => String.fromCharCode(rand(97, 123));
const gerarNumero = () => String.fromCharCode(rand(48, 58));

const simbolos = ',.;-^~?/{[}]:=+_)(*&%$#@!';
const geraSimbulo = () => simbolos[rand(0, simbolos.length)];

export function geraSenha(qtd, maiuscula, minuscula, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd)

    for(let i = 0; i < qtd; i++) {
        // Lógica de curto-circuito para validar as opções que forem escolhidas
        maiuscula && senhaArray.push(gerarMaiusculo());
        minuscula && senhaArray.push(gerarMinusculo());
        numeros && senhaArray.push(gerarNumero());
        simbolos && senhaArray.push(geraSimbulo());
    }

    // join('') remove 
    return senhaArray.join('').slice(0, qtd)
}
