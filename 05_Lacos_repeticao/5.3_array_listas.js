let cores = [
    {nome: 'azul', hex: '#0000FF'},
    {nome: 'verde', hex: '#008000'},
    {nome: 'vermelho', hex: '#FF0000'},
    {nome: 'amarelo', hex: '#FFFF00'},
    {nome: 'preto', hex: '#000000'},    
]

// Corrigido: Adicionando um identificador no for...in
for(let i in cores){
    console.log(`A cor ${cores[i].nome} tem o hex ${cores[i].hex}`)
}

console.log('------------------')

// Usando for...of (já está correto)
for(let cor of cores){
    console.log(`A cor ${cor.nome} tem o hex ${cor.hex}`)
}

console.log('------------------')

// Usando for clássico (já está correto)
for(let i = 0; i < cores.length; i++){
    console.log(`A cor ${cores[i].nome} tem o hex ${cores[i].hex}`)
}