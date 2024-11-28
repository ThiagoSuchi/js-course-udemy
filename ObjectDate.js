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
const data3 = new Date('2024-11-28 15:24:56');
console.log(data3);
console.log(data3.toString());
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth() + 1);
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Minuto', data3.getMinutes());
console.log('Segundo', data3.getSeconds());
console.log('Milessegundo', data3.getMilliseconds());


