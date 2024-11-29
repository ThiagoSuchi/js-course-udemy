function formatDate(data) {
  const dia = data.getDay();
  const mes = data.getMonth();
  const ano = data.getFullYear();
  const hora = data.getHours();
  const min = data.getMinutes();
  let diaSemanaTexto;

  const diaMes =  [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 
    'Maio', 'Junho', 'Julho', 'Agosto', 
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  const index = mes

  switch (dia) {
    case 0:
      diaSemanaTexto = "Domingo";
      break;
    case 1:
      diaSemanaTexto = "Segunda-feira";
      break;
    case 2:
      diaSemanaTexto = "Terça-feira";
      break;
    case 3:
      diaSemanaTexto = "Quarta-feira";
      break;
    case 4:
      diaSemanaTexto = "Quinta-feira";
      break;
    case 5:
      diaSemanaTexto = "Sexta-feira";
      break;
    case 6:
      diaSemanaTexto = "Sábado";
      break;
    default:
      diaSemanaTexto = "";
      break;
  }

  return `${diaSemanaTexto}, ${dia} de ${diaMes[index]} de ${ano} ${hora}:${min}`
}

function getDateFormated() {
  const date = document.getElementById("data");
  const dataAtual = formatDate(new Date());
  date.innerHTML = dataAtual;
}

getDateFormated()