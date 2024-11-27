const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#Peso");
  const inputAltura = event.target.querySelector("#Altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Verificando se peso e altura são válidos.
  if (!peso) {
    setResultado("Peso inválido!", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida!", false);
    return;
  }

  const imc = calculoImc(peso, altura);
  setResultado(imc);
  classificarImc(imc)
});

// Classificando a pessoa pelo seu IMC
function classificarImc(imc) {
    const nivel = [
        'Abaixo do peso', 
        'Peso normal', 
        'Sobrepeso', 
        'Obesidade grau 1', 
        'Obesidade grau 2', 
        'Obesidade grau 3'
    ]
    let categoria = [];

    switch (true) {
        case imc < 18.5:
            categoria.push(nivel[0]);
            break;
        case imc >= 18.5:
            categoria.push(nivel[1]);
            break;
        case imc >= 25:
            categoria.push(nivel[2]);
            break;
        case imc >= 30:
            categoria.push(nivel[3]);
            break;
        case imc >= 35:
            categoria.push(nivel[4]);
            break;
        case imc >= 40:
            categoria.push(nivel[5]);
            break;
        default:
            categoria = 'Risco de vida, obesidade grave!'; 
    }
}

// Calculando IMC.
function calculoImc(peso, altura) {
    const calculo = peso / (altura ** 2);
    return calculo.toFixed(2)
}

// Criando um paragrafo.
function criarParagrafo() {
  const p = document.createElement("p");
  return p;
}

// Inserindo em resultado o calculo IMC.
function setResultado(msg, isValid) {
  const result = document.getElementById("resultado");
  result.innerHTML = "";

  const p = criarParagrafo();
  p.innerHTML = msg;
  result.appendChild(p);
}
