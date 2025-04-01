//Exercicios de Arrays
let carros = [
    "Fusca", 
    "Civic", 
    "Palio", 
    "Corolla", 
    "Gol"
];
console.log(carros);

//Trocando Fusca por Onix
carros[0] = "Onix";
console.log(carros);

//Adicionando novo carro
carros.push("Hilux");
console.log(carros);

//Tamanho do array
console.log(`O tamanho do array é ${carros.length}`);