//Funcao para maior de idade

function maiorIdade(idade){
    if(idade >= 18){
        return "Maior de idade";
    }else{
        return "Menor de idade";
    }   
}
console.log(maiorIdade(17)); // Menor de idade
console.log(maiorIdade(18)); // Maior de idade
console.log(maiorIdade(19)); // Maior de idade
console.log(maiorIdade(20)); // Maior de idade