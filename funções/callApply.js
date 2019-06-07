function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

// chamando o getPreco à partir do objeto
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20}

// chamando o getPreco à partir do Call
console.log(getPreco.call(carro))

// chamando o getPreco à partir do Apply
console.log(getPreco.apply(carro))

// a deferença entre Call e apply é a forma como se passam os parâmatros
console.log(getPreco.call(carro, 0.17, '$')) // carro =  contexto, 0.17 e '$' são os parâmetros
console.log(getPreco.apply(carro, [0.17, '$'])) // já no apply, passa-se o contexto e os parâmetros entram como array
