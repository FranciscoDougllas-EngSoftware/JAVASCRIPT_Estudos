// While true
let contador = 0;
while (true) {
    console.log(`Contador: ${contador}`);
    contador++; // incrementa o contador

    // Ignora os números entre 10 e 30
    if (contador > 10 && contador < 30) {
        continue; // pula para a próxima iteração
    }

    // Para o loop quando o contador for 50
    if (contador === 50) {
        break;
    }
}