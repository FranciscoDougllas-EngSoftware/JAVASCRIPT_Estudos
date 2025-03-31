//Utilizando o switch

const idade = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
console.log(`Idade: ${idade}`);

switch (true) {
    case (idade < 18):
        console.log("Menor de Idade");
        break;
    case (idade >= 18 && idade < 60):
        console.log("Maior de Idade e Menor de 60 anos");
        break;
    case (idade >= 60):
        console.log("Maior de 60 anos");
        break;
    default:
        console.log("Idade inválida");
}
// O switch é mais utilizado para comparar valores exatos, mas neste caso estamos utilizando para comparar faixas de idade.