//Utilizando Funcoes dentro de funcoes

function addSquare(a, b){
    function square(x){
        return x * x;
    }
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addSquare(2, 3)); // Saída: 13 (4 + 9)
console.log(addSquare(4, 5)); // Saída: 41 (16 + 25)
console.log(addSquare(6, 7)); // Saída: 85 (36 + 49)