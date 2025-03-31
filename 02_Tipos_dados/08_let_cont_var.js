//Diferença entre let, const e var
// var é uma variável global, let é uma variável local e const é uma constante

// var é uma variável que pode ser reatribuída
var nome = "João";
console.log(nome); // Saída: João
var idade = 30;
nome = "Maria"; // Reatribuição permitida
console.log(nome); // Saída: Maria

// let é uma variável que pode ser reatribuída, mas tem escopo de bloco
let cidade = "São Paulo";
console.log(cidade); // Saída: São Paulo
cidade = "Rio de Janeiro"; // Reatribuição permitida
console.log(cidade); // Saída: Rio de Janeiro

// let também pode ser usada dentro de um bloco
if (true) {
    let estado = "SP";
    console.log(estado); // Saída: SP
}
// console.log(estado); // Erro: estado não está definido fora do bloco
// const é uma constante que não pode ser reatribuída
const pais = "Brasil";
console.log(pais); // Saída: Brasil
// pais = "Argentina"; // Erro: Assignment to constant variable
// const também pode ser usada dentro de um bloco
if (true) {
    const continente = "América";
    console.log(continente); // Saída: América
}