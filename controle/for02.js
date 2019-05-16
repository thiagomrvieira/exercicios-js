
const notas = [6.4, 5.0, 9.5, 8.1, 7.7]

//for/in
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Thiago",
    sobrenome: "Maciel", 
    idade: 30,
    peso: 82
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}