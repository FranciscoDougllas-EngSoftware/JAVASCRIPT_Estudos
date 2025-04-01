//Calculo de precos de quartos
function calcularPreco(metragem, quartos){
    let m2 = 3000; //preco por m2
    let preco = 0; //preco total

    switch(quartos){
        case 1:
            preco = (metragem * m2); //preco para 1 quarto
            break;
        case 2:
            preco = (metragem * m2); //preco para 2 quartos
            break;
        case 3:
            preco = (metragem * m2); //preco para 3 quartos
            break;
        case 4:
            preco = (metragem * m2); //preco para 4 quartos
            break;
        default:
            console.log("Número de quartos inválido!"); //mensagem de erro
            return; //sai da função
    }
    return preco; //retorna o preco total
}

let metragem = 100; //metragem do quarto
let quartos = 2; //numero de quartos
let preco = calcularPreco(metragem, quartos); //chama a função
console.log("O preço do quarto é: R$ " + preco); //exibe o preco do quarto