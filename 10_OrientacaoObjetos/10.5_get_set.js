//Classes get e set
class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca; // Atribui o valor do parâmetro marca à propriedade marca do objeto atual
        this.modelo = modelo; // Atribui o valor do parâmetro modelo à propriedade modelo do objeto atual
        this.ano = ano; // Atribui o valor do parâmetro ano à propriedade ano do objeto atual
    }
    get getMarca(){
        return this.marca; // Retorna o valor da propriedade marca do objeto atual
    }
    set setMarca(marca){
        this.marca = marca; // Atribui o valor do parâmetro marca à propriedade marca do objeto atual
    }
    get getModelo(){
        return this.modelo; // Retorna o valor da propriedade modelo do objeto atual
    }
}

let carro1 = new Carro('Fusca', 'Volkswagen', 1970); // Cria uma nova instância da classe Carro
let carro2 = new Carro('Civic', 'Honda', 2020); // Cria mais uma instância da classe Carro
console.log(carro1); // Exibe a instância carro1 no console
console.log(carro2); // Exibe a instância carro2 no console