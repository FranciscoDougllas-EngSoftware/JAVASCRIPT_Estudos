//Operacoes basicas em Arrays
let ingredientes = [
    "farinha", 
    "açucar", 
    "ovo", 
    "leite", 
    "fermento"
];
console.log(`Temos ao todo ${ingredientes.length} ingredientes`);
console.log(`O primeiro ingrediente é ${ingredientes[0]}`);
console.log(`O último ingrediente é ${ingredientes[ingredientes.length - 1]}`);
console.log(`O segundo ingrediente é ${ingredientes[1]}`);

//Adicionando novo ingrediente
ingredientes.push("manteiga");
console.log(`Temos ao todo ${ingredientes.length} ingredientes`);
console.log(`O novo ingrediente é ${ingredientes[ingredientes.length - 1]}`);

//Removendo o ultimo ingrediente
ingredientes.pop();
console.log(`Temos ao todo ${ingredientes.length} ingredientes`);
console.log(`O último ingrediente é ${ingredientes[ingredientes.length - 1]}`);

//Removendo o primeiro ingrediente
ingredientes.shift();
console.log(`Temos ao todo ${ingredientes.length} ingredientes`);
console.log(`O primeiro ingrediente é ${ingredientes[0]}`);