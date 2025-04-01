//Funcoes de Arrays

let fruits = ['banana', 'apple', 'orange', 'kiwi'];
console.log(fruits.length); // 4
console.log(fruits)

//Adicionando Nova Fruta
fruits.push("Manga");
console.log(fruits); // ['banana', 'apple', 'orange', 'kiwi', 'Manga']

//Removdo a Ultima Fruta
fruits.pop(); // remove o último elemento
console.log(fruits); // ['banana', 'apple', 'orange', 'kiwi']

//Removendo o Primeiro
fruits.shift(); // remove o primeiro elemento
console.log(fruits); // ['apple', 'orange', 'kiwi']

//Adicionando o Primeiro
fruits.unshift("banana"); // adiciona um elemento no início
console.log(fruits); // ['banana', 'apple', 'orange', 'kiwi']

//Juntando Arrays
let vegetables = ['carrot', 'broccoli', 'spinach'];
let food = fruits.concat(vegetables); // junta dois arrays
console.log(food); // ['banana', 'apple', 'orange', 'kiwi', 'carrot', 'broccoli', 'spinach']

//Unindo o Join
let foodString = food.join(", "); // junta os elementos em uma string
console.log(foodString); // 'banana, apple, orange, kiwi, carrot, broccoli, spinach'

//Alterando o Array
food[0] = "manga"; // altera o primeiro elemento
console.log(food); // ['manga', 'apple', 'orange', 'kiwi', 'carrot', 'broccoli', 'spinach']