import { gerarComCaracterMaiuculo } from "./service/letraMaiuscula.js";

const upperCase = document.querySelector('.uppercase');
const lowerCase = document.querySelector('.lowercase');
const btnGerar = document.querySelector('.btn-gerar');

btnGerar.addEventListener('click', (e) => {
    e.preventDefault()
    const length = document.querySelector('#length').value;
    const numberLength = parseInt(length);
    
    if (isNaN(numberLength)) {
        alert('Porfavor escolha a quantidade de caracteres para sua senha.')
        return
    }

    if (numberLength > 12 || numberLength < 4) {
        alert('Gere uma senha com uma quantidade de 4 a 20 caracteres.')
        return
    }

    const divSenhaGerada = document.querySelector('.senha-gerada');
    
    divSenhaGerada.innerHTML = gerarComCaracterMaiuculo(numberLength)

})
