//Introducao aos Objetos em JavaScript

const pessoa = {
    nome: 'Lucas',
    idade: 25,
    sexo : 'Masculino',
    altura: 1.75,
    trabalha: function(){
        if (this.idade >= 18){
            return 'Sim, trabalha.';
        } else {
            return 'Não, não trabalha.';
        }
    }
}
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, é do sexo ${pessoa.sexo}, tem ${pessoa.altura}m de altura e ${pessoa.trabalha()}`);