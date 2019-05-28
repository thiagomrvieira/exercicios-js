const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1} . ${nome}`)
}

fabricantes.forEach(imprimir)


// a recebe o nome de todos os fabricantes
fabricantes.forEach(function(a){
    console.log(fabricante)
})
// a mesma coisa com função arrow
fabricantes.forEach(fabricante => console.log(fabricante))

