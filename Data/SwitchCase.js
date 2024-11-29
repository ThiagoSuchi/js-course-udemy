const data = new Date("2023-02-30 00:00:00");
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Segunda-Feira";
    break;
  case 2:
    diaSemanaTexto = "Terça-Feira";
    break;
  case 3:
    diaSemanaTexto = "Quarta-Feira";
    break;
  case 4:
    diaSemanaTexto = "Quinta-Feira";
    break;
  case 5:
    diaSemanaTexto = "Sexta-Feira";
    break;
  case 6:
    diaSemanaTexto = "Sábado";
    break;
  default:
    diaSemanaTexto = "";
    break;
}

console.log(diaSemana, diaSemanaTexto);
