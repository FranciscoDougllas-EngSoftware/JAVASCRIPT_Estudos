//Utilizando o Filter
let fruits = ['banana', 'apple', 'orange', 'kiwi', 'mango', 'grape'];
let bitFruits = fruits.filter((item) => {
    return item.length <= 4; // Filtra frutas com menos de 6 letras
})
console.log(bitFruits); // ['apple', 'kiwi', 'grape']

//Outras Forma
fruits.every((item) => {
    return item.length <= 4; // Verifica se todas as frutas têm menos de 6 letras
})
console.log(fruits.every((item) => item.length <= 4)); // false

//Utilizando o some
fruits.some((item) => {
    return item.length <= 4; // Verifica se alguma fruta tem menos de 6 letras
})
console.log(fruits.some((item) => item.length <= 4)); // true