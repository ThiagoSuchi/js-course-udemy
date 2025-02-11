/* é uma estrutura de repetição do 
JavaScript que serve para percorrer itens 
de objetos iteráveis, como arrays, strings, 
maps, sets, e outros. */
const nome = ["João Paulo", "Laura Viera"];

for (let valor of nome) {
  // valor: Representa o valor de cada item no objeto iterável durante a iteração.
  // nome: É o objeto que você deseja percorrer (ex.: um array ou string).
  console.log(nome, valor);
  break;
}

console.log('-------------------------------------------------');

const usuarios = new Map([
  [1, "João"],
  [2, "Maria"],
  [3, "Carlos"],
]);

for (const [id, nome] of usuarios) {
  console.log(`ID: ${id}, Nome: ${nome}`);
}

// OBS - Retorna o valor em si(iteráveis, arrays, strings)