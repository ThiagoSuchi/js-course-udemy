const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#Peso");
  const inputAltura = event.target.querySelector("#Altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Verificando se peso e altura são válidos.
  if (!peso && !altura) {
    setResultado("Peso e Altura inválidos!", false);
    return;
  }
  if (!peso) {
    setResultado("Peso inválido!", false);
    return;
  }
  if (!altura) {
    setResultado("Altura inválida!", false);
    return;
  }

  const imc = calculoImc(peso, altura);
  const nivelIMC = classificarImc(imc)
  
  const msg = `Seu IMC --> ${imc} <-- (${nivelIMC})`;
  setResultado(msg, true)

});

// Classificando a pessoa pelo seu IMC
function classificarImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  let categoria = '';

  switch (true) {
    case imc >= 40:
      categoria = nivel[5];
      break;
    case imc >= 35:
      categoria = nivel[4];
      break;
    case imc >= 30:
      categoria = nivel[3];
      break;
    case imc >= 25:
      categoria = nivel[2];
      break;
    case imc >= 18.5:
      categoria = nivel[1];
      break;
    case imc < 18.5:
      categoria = nivel[0];
      break;
    default:
      categoria = "Erro - Valor inválido!";
  }
  
  return categoria;
}

// Calculando IMC.
function calculoImc(peso, altura) {
  const calculo = peso / altura ** 2;
  return calculo.toFixed(2);
}

// Criando um paragrafo.
function criarParagrafo() {
  const p = document.createElement("p");
  return p;
}

// Inserindo em resultado o calculo IMC.
function setResultado(msg, isValid) {
  const result = document.querySelector("#resultado");
  result.innerHTML = '';

  const p = criarParagrafo();

  if(isValid) {
    console.log('Tem nenhum problema com a condição');
    p.classList.add('result');
  } else {
    console.log('AQUI');
    p.classList.add('invalid')
  }

  p.innerHTML = msg;
  result.appendChild(p);
}
