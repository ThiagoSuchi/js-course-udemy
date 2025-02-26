import { geraSenha } from "./service/geradorSenha.js";

const senhaGerada = document.querySelector('.senha-gerada');
const btnGerar = document.querySelector('.btn-gerar');
const inputLength = document.getElementById('length');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const simbols = document.getElementById('symbols');

btnGerar.addEventListener('click', () => {
    const qtd = inputLength.value
    const upperChecked = upperCase.checked
    const lowerChecked = lowerCase.checked
    const numsChecked = numbers.checked
    const simbolChecked = simbols.checked

    let senha = geraSenha(qtd, upperChecked, lowerChecked, numsChecked, simbolChecked)
    senhaGerada.innerHTML = senha
})