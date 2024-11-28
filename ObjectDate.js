//-----new Date() - principal -----------------------------------------------------------------------
const data = new Date();
console.log(data);

console.log('--------------------------------------------------------------');

//-----Valor-----------------------------------------------------------------------------------------
const tresHoras = 60 * 60 * 3 * 1000;// Manipulando hora
const umDia = 60 * 60 * 24 * 1000;// Manipulando dia
// Marco 0
const data1 = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
console.log(data1);
console.log(data1.toString());

console.log('--------------------------------------------------------------');

//--------------------(ano, mês, dia, hora, min, seg, mileseg)---------------------------------------
const data2 = new Date(2024, 2-1, 20, 13, 27, 40)
console.log(data2);
console.log(data2.toString());

console.log('--------------------------------------------------------------');

//-----dataString------------------------------------------------------------------------------------
const data3 = new Date('2024-11-28 11:24:56');
console.log(data3);
console.log(data3.toString());

