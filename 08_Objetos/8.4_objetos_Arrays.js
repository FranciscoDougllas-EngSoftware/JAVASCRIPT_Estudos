//Obejetos com arrays
let personagem = {
    nome: 'Lucas',
    idade: 25,
    carros: [
        { modelo: 'Fusca', ano: 1968 },
        { modelo: 'Civic', ano: 2020 },
        { modelo: 'Corolla', ano: 2021 },
        { modelo: 'Gol', ano: 2019 }
    ],
    caracteristicas: {
        cabelo: 'preto',
        altura: 1.75,
        peso: 70
    }
}
console.log(personagem.carros[0].modelo);
personagem.carros[0].modelo = 'Fusca 1970';
console.log(personagem.carros[0].modelo); // Fusca 1970