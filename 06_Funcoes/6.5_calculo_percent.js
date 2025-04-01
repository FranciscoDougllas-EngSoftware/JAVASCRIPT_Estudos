//Calculo do Percentual de um produto
function calcPctual(preco, percentual) {
    let valor = (preco * percentual) / 100;
    return valor;
}
//Calculo do Percentual de um produto
console.log(calcPctual(100, 10)); //10
console.log(calcPctual(200, 20)); //40
console.log(calcPctual(300, 30)); //90
console.log(calcPctual(400, 40)); //160