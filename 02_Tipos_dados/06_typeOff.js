//Tipo dos dados
let nome = "Lucas"; // string
let idade = 25; // number
let altura = 1.75; // number
let casado = false; // boolean
let filhos = null; // null
let endereco; // undefined
let simbolo = Symbol("descricao"); // symbol
let grandeNumero = BigInt(123456789012345678901234567890); // bigInt
let objeto = { nome: "Lucas", idade: 25 }; // object
let array = [1, 2, 3, 4, 5]; // array (tipo de objeto)

let funcao = function() { return "Olá!"; }; // function (tipo de objeto)
let data = new Date(); // objeto Date

console.log(typeof nome); // Saída: string
console.log(typeof idade); // Saída: number
console.log(typeof altura); // Saída: number
console.log(typeof casado); // Saída: boolean