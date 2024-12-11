const section = document.querySelector(".container");
const relogio = document.querySelector(".relogio");
const btnIniciar = document.querySelector(".iniciar");
const btnPausar = document.querySelector(".pausar");
const btnZerar = document.querySelector(".zerar");

function zeroEsquerda(hours) {
  return hours > 9 ? hours : `0${hours}`;
}

let sec = 0;
let time = null;

btnIniciar.addEventListener("click", () => {
  relogio.style.color = "white";

  if (!time) {
    time = setInterval(() => {
      sec++;

      // Formatando hora-minuto-segundo em hh/mm/ss
      let second = sec % 60;
      let minute = Math.floor(sec / 60) % 60;
      let hours = Math.floor(sec / 3600);

      relogio.innerHTML = `${zeroEsquerda(hours)}:${zeroEsquerda(
        minute
      )}:${zeroEsquerda(second)}`;
    }, 1000);
  }
});

btnPausar.addEventListener("click", () => {
    relogio.style.color = "red";
    clearInterval(time);
    time = null;
});

btnZerar.addEventListener("click", () => {
    relogio.style.color = "white";
    clearInterval(time)
    time = null;
    sec = 0;
    relogio.innerHTML = "00:00:00";
});
