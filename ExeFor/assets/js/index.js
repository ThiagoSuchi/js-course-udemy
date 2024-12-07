// Do meu jeito:
const section = document.querySelector('.container')

const elementos = [
    {tag: 'h3', texto: 'Olá, senhoras e senhores.'},
    {tag: 'h3', texto: 'Como vocês  estão?'},
    {tag: 'p', texto: 'Hoje é um grande dia!'},
    {tag: 'p', texto: 'Dia de jogar um volei!'}
];

function createElement(element, text) {
    const elementHTML = document.createElement(element)
    elementHTML.innerHTML = text
    return elementHTML
}

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i]
    section.appendChild(createElement(tag, texto))
}

