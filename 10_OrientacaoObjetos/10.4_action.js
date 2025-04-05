//Constructor e this
class Person{
    age = 0;
    steps = 0;
    constructor(name, age){
        this.name = name; // this.name é uma propriedade do objeto
    }
    takeStep(){
        this.steps ++;
    }
    setAge(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge; // this.age é uma propriedade do objeto
        }else{
            console.log('Idade inválida!'); // Saída: Idade inválida!

        }  
    }
}

let person1 = new Person('Lucas'); // Instância de Person
let person2 = new Person('Maria'); // Instância de Person
let person3 = new Person('João'); // Instância de Person
person1.setAge(25); // Chama o método setAge() da instância person1
person2.setAge(30); // Chama o método setAge() da instância person2
person3.setAge(28); // Chama o método setAge() da instância person3
person1.takeStep(); // Chama o método takeStep() da instância person1
person1.takeStep(); // Chama o método takeStep() da instância person1
person2.takeStep(); // Chama o método takeStep() da instância person2
person3.takeStep(); // Chama o método takeStep() da instância person3

console.log(`Passos de ${person1.name}: ${person1.steps}`); // Saída: Passos de Lucas: 2
console.log(`Passos de ${person2.name}: ${person2.steps}`); // Saída: Passos de Maria: 0
console.log(`Passos de ${person3.name}: ${person3.steps}`); // Saída: Passos de João: 1