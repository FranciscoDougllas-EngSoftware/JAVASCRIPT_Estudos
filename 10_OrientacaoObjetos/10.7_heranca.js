//Herança
class Person{
    age = 0;
    
    constructor(name){
        this.name = name;
    }

    //Criando uma função para mostrar o nome
    sayHi(){
        console.log(`Oi, meu nome é ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, id){
        super(name); // Chama o construtor da classe pai (Person)
        this.id = id;
    }
    sayHello(){
        super.sayHi(); // Chama a função sayHi da classe pai (Person)
    }
}
let p1 = new Student('Lucas', 1234);
p1.age = 20;
console.log(`${p1.name} tem ${p1.age} anos`); // Lucas tem 20 anos

let p2 = new Student('Ana', 4321);
p2.age = 22;
console.log(`${p2.name} tem ${p2.age} anos`); // Ana tem 22 anos

//Utilizando a função sayHi
p1.sayHi(); // Oi, meu nome é Lucas