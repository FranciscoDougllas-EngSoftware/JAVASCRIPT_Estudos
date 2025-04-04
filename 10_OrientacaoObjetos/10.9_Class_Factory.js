class Person{
    age = 0;

    constructor(name){
        this.name = name;
    }
}

function createPerson(name, age){
    let pessoa = new Person(name);
    pessoa.age = age;
    return pessoa;
}

let p1 = createPerson('Lucas', 56);
let p2 = createPerson('João', 23);
console.log(p1.name, p1.age); // Lucas 0
console.log(p2.name, p2.age); // João 0