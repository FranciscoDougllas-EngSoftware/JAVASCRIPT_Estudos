//Factore programação funcional
// Factory function

function createPerson(name, age, lastName){
    return { // Objeto literal
        name,
        lastName, 
        age,
        walk() {
            //walk é um método do objeto
            // this é o objeto que está chamando o método
            console.log(`${this.name} is walking`)
        },
        talk() {
            //talk é um método do objeto
            // this é o objeto que está chamando o método
            console.log(`${this.name} is talking`)
        },
        nameComplete(){
            console.log(`${this.name} ${this.lastName} ${this.age}`)
        }
    }
}

let person1 = createPerson('Lucas', 25, 'ABC'); // Ordem correta
let person2 = createPerson('Maria', 30, 'ABC'); // Ordem correta
console.log(person1.name) // Lucas
console.log(person2.lastName) // Maria
console.log(person1.nameComplete())