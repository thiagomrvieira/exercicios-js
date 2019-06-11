const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // Add um novo elemento ao final do array
console.log(pilotos)

pilotos.shift('Verstappen') // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // add um novo elemento na primeira posição
console.log(pilotos)

//O splice pode add e remover
//adicionando:
pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona elementos a partir do 2 indice, removendo 0 elementos
console.log(pilotos)
//removendo:
pilotos.splice(3, 1) // remove 1 elemento a partir do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo array a partir do indice 2
console.log(algunsPilotos1)