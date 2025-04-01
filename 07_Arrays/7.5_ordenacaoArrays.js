//Ordenação de Arrays
let fruits = ['banana', 'apple', 'orange', 'kiwi'];
console.log(fruits); // ['banana', 'apple', 'orange', 'kiwi']
fruits.sort(); // ordena o array em ordem alfabética
console.log(fruits); // ['apple', 'banana', 'kiwi', 'orange']

//Ordenação Reversa
fruits.reverse(); // inverte a ordem dos elementos
console.log(fruits); // ['orange', 'kiwi', 'banana', 'apple']


let cars = [
    { brand: 'Ford', year: 2015 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Audi', year: 2020 },
    { brand: 'Mercedes', year: 2017 },
    { brand: 'Toyota', year: 2019 }
]
console.log(cars); // Array de objetos
console.log(cars.length); // 5
sortCars = cars.sort((a, b) => a.year - b.year); // ordena os carros por ano
console.log(sortCars); 