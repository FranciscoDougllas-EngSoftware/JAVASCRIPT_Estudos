//Variaveis em Funcoes
let count = 0;  //Variavel global
function add(){
    let count = 0; //Variavel local
    count++; 
}
add(); 
add(); 
add();
console.log(count);