//Passando parametros em funcoes
function nomeCompleto(nome, sobrenome){
    return `Seu nome completo e ${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Lucas", "Lima"));
console.log(nomeCompleto("Lucas", "Lima", "da Silva")); // Ignora o terceiro parametro
console.log(nomeCompleto("Lucas")); // undefined