let times = [
    'Flamengo',
    'Vasco',
    'São Paulo',
    'Palmeiras',
    'Corinthians',
    'Santos',
    'Atlético Mineiro',]

for(let i = 0; i < times.length; i ++){
    console.log(`O ${i + 1} time é ${times[i]}`)
}

console.log('------------------')

//Com o for in eu pego apenas o indice tendo que passa o time como times[time]
for(let time in times){
    console.log(`O ${time} time é ${times[time]}`)
}

console.log('------------------')

//Com o for of eu pego o valor do time diretamente
for(let time of times){
    console.log(`O time é ${time}`)
}
