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
    relogio.classList.remove("pausado");

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
    relogio.classList.add("pausado");
    clearInterval(time);
    time = null;
});

btnZerar.addEventListener("click", () => {
    relogio.classList.remove("pausado");
    clearInterval(time);
    time = null;
    sec = 0;
    relogio.innerHTML = "00:00:00";
});

// Do jeito do instrutor:

// function relogio() {
//     function criaHoraDosSegundos(segundos) {
//       const data = new Date(segundos * 1000);
//       return data.toLocaleTimeString('pt-BR', {
//         hour12: false,
//         timeZone: 'UTC'
//       });
//     }
  
//     const relogio = document.querySelector('.relogio');
//     let segundos = 0;
//     let timer;
  
//     function iniciaRelogio() {
//       timer = setInterval(function() {
//         segundos++;
//         relogio.innerHTML = criaHoraDosSegundos(segundos);
//       }, 1000);
//     }
  
//     document.addEventListener('click', function(e) {
//       const el = e.target;
  
//       if (el.classList.contains('zerar')) {
//         clearInterval(timer);
//         relogio.innerHTML = '00:00:00';
//         relogio.classList.remove('pausado');
//         segundos = 0;
//       }
  
//       if (el.classList.contains('iniciar')) {
//         relogio.classList.remove('pausado');
//         clearInterval(timer);
//         iniciaRelogio();
//       }
  
//       if (el.classList.contains('pausar')) {
//         clearInterval(timer);
//         relogio.classList.add('pausado');
//       }
//     });
//   }
//   relogio();