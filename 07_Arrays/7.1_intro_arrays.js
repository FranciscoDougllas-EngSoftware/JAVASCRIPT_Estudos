//Introducao aos Arrays
//Arrays sao objetos que permitem armazenar uma lista de valores
//Os valores podem ser de qualquer tipo, incluindo outros arrays e objetos

let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["red", 1, true, null, undefined, { name: "John" }, [1, 2, 3]];
let empty = [];
console.log(colors[0]);
console.log(colors[1]);

let array = new Array(1, 2, 3, 4, 5); // Outra forma de criar um array
console.log(array); // [1, 2, 3, 4, 5]
let array2 = new Array(10); // Cria um array com 10 elementos vazios
console.log(array2); // [ <10 empty items> ]
