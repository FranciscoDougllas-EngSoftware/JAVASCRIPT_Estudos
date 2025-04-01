//Objeto personagem
let personagem = {
    nome: 'Lucas',
    idade: 25,
    pais: 'Brasil',
    olhos: ['azuis', 'castanhos'],
    caracteristicas: {
        cabelo: 'preto',
        altura: 1.75,
        peso: 70
    }
}
console.log(personagem.nome);

//Modificando o Personagem
personagem.nome = 'João';
console.log(personagem.nome); // João

//Modificando a Altura
console.log(personagem.caracteristicas.altura); // 1.85

personagem.caracteristicas.altura += 0.10;
console.log(personagem.caracteristicas.altura); // 1.85