/* Rest Operator em desestruturação - Coleta o "resto" dos elementos não capturados 
durante a desestruturação.*/

/* Spread Operator - Espalha elementos de arrays, objetos ou strings em um novo contexto. 
É usado principalmente para clonagem, combinação ou passagem de argumentos.*/

/* OBS - Os dois possuem a mesma sintaxe porem oque irá diferencialos é o contexto em que 
são inseridos */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Desestruturando o array
const [one, two, ...rest] = numbers

console.log(one + "," + two + "," + rest);
console.log(rest);

const lyrics = [
//   0  1  2
    ['a', 'b', 'c'],// 0
//   0  1  2
    ['d', 'e', 'f'],// 1
//   0  1  2
    ['g', 'h', 'i']// 2
];

const [,[,,lyricF]] = lyrics;
console.log(lyricF);

const [list1, list2, list3] = lyrics;
console.log(list1, list2, list3);
console.log(list1[2], list2[0], list3[1]);



