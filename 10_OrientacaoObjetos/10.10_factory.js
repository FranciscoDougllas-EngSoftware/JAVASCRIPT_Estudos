//Factore programação funcional
// Factory function

function createPerson(name, age){
    return { // Objeto literal
        name: name,
        age: age,
        walk() {
            //walk é um método do objeto
            // this é o objeto que está chamando o método
            console.log(`${this.name} is walking`)
        },
        talk() {
            //talk é um método do objeto
            // this é o objeto que está chamando o método
            console.log(`${this.name} is talking`)
        }
    }
}

let person1 = createPerson('Lucas', 25)
let person2 = createPerson('Maria', 30)
console.log(person1.name) // Lucas
console.log(person2.name) // Maria