// capturando o evento de submit do formulário
const calcular = document.getElementById('Calcule');

function calculoIMC(event) {
    event.preventDefault();

    const peso = document.getElementById('Peso').value;
    const altura = document.getElementById('Altura').value;
    const resultado = document.getElementById('resultado');
    let valorIMC;

    if(peso !== '' && altura !== ''){
        let pesoNumber = Number(peso)
        let alturaNumber = Number(altura)
        valorIMC = (pesoNumber / ((alturaNumber/100) ** 2))
    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
    classificarPeso(valorIMC)
}

function classificarPeso(valorIMC) {
    let classificacao = ''
    
    switch (true) {
        case (valorIMC < 18.5):
            classificacao = 'abaixo do peso';
            break;
        case (valorIMC < 25):
            classificacao = 'peso ideal';
            break;
        case (valorIMC < 30):
            classificacao = 'acima do peso';
            break;
        case (valorIMC < 35):
            classificacao = 'obesidade grau I';
            break;
        case (valorIMC < 40):
            classificacao = 'obesidade grau II';
            break;
    default:
        classificacao = 'obesidade grau III';
    }    

    resultado.textContent = `Seu IMC é - ${valorIMC.toFixed(1)} (${classificacao})`
}

calcular.addEventListener('click', calculoIMC)