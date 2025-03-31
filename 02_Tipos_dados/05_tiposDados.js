//No JavaScript existem 7 tipos de dados primitivos:
// 1. Number: Números, tanto inteiros quanto decimais.
let numero = 10; // inteiro
let decimal = 10.5; // decimal
console.log(numero); // Saída: 10
console.log(decimal); // Saída: 10.5

// 2. String: Cadeias de caracteres, representadas entre aspas simples ou duplas.
let texto = "Olá, mundo!"; // string
let texto2 = 'Olá, mundo!'; // string
console.log(texto); // Saída: Olá, mundo!
console.log(texto2); // Saída: Olá, mundo!

// 3. Boolean: Valores lógicos, que podem ser verdadeiro (true) ou falso (false).
let verdadeiro = true; // booleano
let falso = false; // booleano
console.log(verdadeiro); // Saída: true
console.log(falso); // Saída: false

// 4. Undefined: Um valor que foi declarado, mas não inicializado.
let indefinido; // undefined
console.log(indefinido); // Saída: undefined

// 5. Null: Um valor intencionalmente vazio ou ausente.
let nulo = null; // null
console.log(nulo); // Saída: null

// 6. Symbol: Um valor único e imutável, usado como identificador de propriedades de objetos.
let simbolo = Symbol("descricao"); // symbol
console.log(simbolo); // Saída: Symbol(descricao)

// 7. BigInt: Um tipo de dado para representar números inteiros muito grandes.
let grandeNumero = BigInt(123456789012345678901234567890); // bigInt
console.log(grandeNumero); // Saída: 123456789012345678901234567890n