import { geraSenha } from "./geradorSenha.js";

const senhaGerada = document.querySelector('.senha-gerada');
const btnGerar = document.querySelector('.btn-gerar');
const inputLength = document.getElementById('length');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const simbols = document.getElementById('symbols');

export default () => {
    btnGerar.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera() {
    const senha = geraSenha(
      inputLength.value,
      upperCase.checked,
      lowerCase.checked,
      numbers.checked,
      simbols.checked,
    )

    return senha || 'Nada selecionado.'
}