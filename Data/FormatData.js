// função para adicionar zero esquerda na data e hora
function zeroEsquerda (data) {
    return data >= 10 ? data : `0${data}`
}
// função de formatação de data
function formatandoData (data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data =  new Date()
const dataAtual = formatandoData(data)
console.log(dataAtual);
