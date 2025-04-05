//Constructor e this
class Person{
    constructor(name, age){
        this.name = name; // this.name é uma propriedade do objeto
        this.age = age; // this.age é uma propriedade do objeto
    }
}

const person1 = new Person('Lucas', 25); // Instância de Person
const person2 = new Person('Maria', 30); // Instância de Person
console.log(person1); // Saída: Person { name: 'Lucas', age: 25 }
console.log(person2); // Saída: Person { name: 'Maria', age: 30 }