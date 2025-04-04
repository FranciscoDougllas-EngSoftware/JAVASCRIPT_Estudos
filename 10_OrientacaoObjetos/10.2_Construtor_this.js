//Utilizando o Construtor e o this
//O this é uma palavra-chave que se refere ao contexto atual de execução.
//Dentro de um método, o this se refere ao objeto que está chamando o método.
//Dentro de um construtor, o this se refere ao objeto que está sendo criado.
//O this é utilizado para acessar as propriedades e métodos do objeto atual.
//O this é utilizado para evitar conflitos de nomes entre propriedades e parâmetros do construtor.
//O this é utilizado para encadear chamadas de métodos dentro de um objeto.
//O this é utilizado para criar métodos encadeados, permitindo chamadas de métodos em sequência.
//O this é utilizado para criar métodos de instância, que podem ser chamados em objetos criados a partir de uma classe.
//O this é utilizado para criar métodos estáticos, que podem ser chamados diretamente na classe, sem a necessidade de criar um objeto.
//O this é utilizado para criar métodos de classe, que podem ser chamados diretamente na classe, sem a necessidade de criar um objeto.

class Person {
    constructor(name, age) {
        this.name = name; // Atribui o valor do parâmetro name à propriedade name do objeto atual
        this.age = age;   // Atribui o valor do parâmetro age à propriedade age do objeto atual
    }
}