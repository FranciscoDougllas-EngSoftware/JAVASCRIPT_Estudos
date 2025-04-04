//Action - Classe que representa uma ação a ser executada
class Person {

    age = 0 // Inicializa a propriedade age com o valor 0
    steps = 0 // Inicializa a propriedade steps com o valor 0
    
    constructor(name, age) {
        this.name = name; // Atribui o valor do parâmetro name à propriedade name do objeto atual
    }

    takeAStep(){
        this.steps ++; // Incrementa a propriedade steps em 1
        console.log(`${this.name} deu um passo!`); // Exibe uma mensagem no console informando que a pessoa deu um passo
    }
    setAge(newAge){
        if(typeof newAge == 'number'){ // Verifica se o tipo do parâmetro newAge não é um número
            this.age = newAge; // Atribui o valor do parâmetro newAge à propriedade age do objeto atual
        }else{
            console.log('Idade inválida'); // Exibe uma mensagem de erro no console informando que a idade é inválida
        }
    }
}

let person1 = new Person('Lucas', 25); // Cria uma nova instância da classe Person
let person2 = new Person('Ana'); // Cria mais uma instância da classe Person

person1.takeAStep(); // Chama o método takeAStep() da instância person1
person2.takeAStep(); // Chama o método takeAStep() da instância person2

person1.takeAStep(); // Chama o método takeAStep() da instância person1 novamente
person2.takeAStep(); // Chama o método takeAStep() da instância person2 novamente
console.log(person1); // Exibe a instância person1 no console novamente
console.log(person2); // Exibe a instância person2 no console novamente