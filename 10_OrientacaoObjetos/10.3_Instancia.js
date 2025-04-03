class Person {
    constructor(name, age) {
        this.name = name; // Atribui o valor do parâmetro name à propriedade name do objeto atual
        this.age = age;   // Atribui o valor do parâmetro age à propriedade age do objeto atual
    }
}

let person1 = new Person('Lucas', 25); // Cria uma nova instância da classe Person
let person2 = new Person('Maria', 30); // Cria outra instância da classe Person
let person3 = new Person('João', 35); // Cria mais uma instância da classe Person
let person4 = new Person('Ana', 28); // Cria mais uma instância da classe Person
console.log(person1); // Exibe a instância person1 no console
console.log(person2); // Exibe a instância person2 no console
console.log(person3); // Exibe a instância person3 no console
console.log(person4); // Exibe a instância person4 no console