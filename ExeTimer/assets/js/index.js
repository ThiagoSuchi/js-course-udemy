const section = document.querySelector(".container");
const relogio = document.querySelector(".relogio");
const btnIniciar = document.querySelector(".iniciar");
const btnPausar = document.querySelector(".pausar");
const btnZerar = document.querySelector(".zerar");

function zeroEsquerda(hours) {
    return hours > 9 ? hours : `0${hours}`
}

btnIniciar.addEventListener("click", () => {
  let sec = 0;
  setInterval(() => {
    sec += 1;
    
    // Formatando hora-minuto-segundo em hh/mm/ss
    let second = sec % 60;
    let minute = Math.floor(sec / 60) % 60;
    let hours = Math.floor(sec / 36000);

    relogio.innerHTML = `${zeroEsquerda(hours)}:${zeroEsquerda(minute)}:${zeroEsquerda(second)}`;
  }, 1000);
});


btnPausar.addEventListener("click", () => {

});

btnZerar.addEventListener("click", () => {
  console.log(btnZerar);
});
