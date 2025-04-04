//Utilizando o get e set para encapsular atributos
class Person{
    _age = 10;
    steps = 0;

    construnctor(firstName, fastName){
        this.firstName = firstName; // Atribui o valor do parâmetro FirstName à propriedade FirstName do objeto atual
        this.fastName = fastName; // Atribui o valor do parâmetro LastName à propriedade LastName do objeto atual
    }
    takeStep(){
        this.steps++; // Incrementa o número de passos dados pelo objeto atual
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`; // Retorna o nome completo do objeto atual
    }
    get age(){
        return this._age; // Retorna o valor da propriedade _age do objeto atual
    }
    set age(x){
        if(typeof x == 'number'){ // Verifica se o parâmetro x é do tipo number
            this._age = x; // Atribui o valor do parâmetro x à propriedade _age do objeto atual
        }
    }
}

let person1 = new Person('Lucas', 'Silva'); // Cria uma nova instância da classe Person
let person2 = new Person('Ana', 'Souza'); // Cria mais uma instância da classe Person
person1.age = 25; // Define a idade da pessoa 1 como 25
person2.age = 30; // Define a idade da pessoa 2 como 30
console.log(`${person1.fullName} tem ${person1.age} anos`); // Exibe o nome completo e a idade da pessoa 1 no console
console.log(`${person2.fullName} tem ${person2.age} anos`); // Exibe o nome completo e a idade da pessoa 2 no console