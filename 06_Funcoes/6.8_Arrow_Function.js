//Utilizando as Arrow Functions
// Arrow Function é uma forma mais curta de escrever funções em JavaScript.
// Elas são mais concisas e não possuem o próprio contexto de 'this', o que pode ser útil em algumas situações.

//Exemplo 1: Arrow Function simples
const soma = function(a, b){
    return a + b;
}
console.log(soma(5, 10)); // Saída: 15

// A mesma função escrita como Arrow Function
const somaArrow = (a, b) => a + b;
console.log(somaArrow(5, 10)); // Saída: 15

//Exemplo 2: Arrow Function com um único parâmetro
const quadrado = x => x * x;
console.log(quadrado(4)); // Saída: 16

//Exemplo 3: Arrow Function sem parâmetros
const saudacao = () => 'Olá, mundo!';
console.log(saudacao()); // Saída: Olá, mundo!

//Exemplo 4: Arrow Function com múltiplas linhas
const calcularArea = (base, altura) => {
    const area = base * altura;
    return area;
}
console.log(calcularArea(5, 10)); // Saída: 50

//Exemplo 5: Arrow Function com 'this'
const pessoa = {
    nome: 'João',
    idade: 30,
    apresentar: function() {
        setTimeout(() => {
            console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }, 1000);
    }
}
pessoa.apresentar(); // Saída: Meu nome é João e tenho 30 anos. (após 1 segundo)