function horaAtual() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}
// seInterval - Executa uma função repetidamente, em intervalos regulares definidos.
const time = setInterval(function() {
    console.log(horaAtual());
}, 1000);

// setTimeout - Executa uma função apenas uma vez, após o tempo especificado.
setTimeout(function() {
    clearInterval(time);
}, 4000);

setTimeout(function() {
    console.log('Soou euu, o tiririca!');
}, 5000);