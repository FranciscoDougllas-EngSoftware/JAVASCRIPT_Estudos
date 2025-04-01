//Funcoes em Objetos
let pessoa = {
    nome: 'Lucas',
    sobrenome: 'Lima',
    idade: 20,
    nomeCompleto: function(){
        return `O Nome completo e ${this.nome} ${this.sobrenome}`;
    }
}
console.log(pessoa.nomeCompleto())