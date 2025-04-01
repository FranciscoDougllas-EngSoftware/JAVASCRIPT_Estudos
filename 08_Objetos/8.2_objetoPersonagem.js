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
console.log(`${personagem.nome} tem 
     ${personagem.idade} anos, é do país 
     ${personagem.pais}, tem olhos 
     ${personagem.olhos[0]} e 
     ${personagem.olhos[1]}, cabelo 
     ${personagem.caracteristicas.cabelo}, altura 
     ${personagem.caracteristicas.altura}m e peso 
     ${personagem.caracteristicas.peso}kg.`
);