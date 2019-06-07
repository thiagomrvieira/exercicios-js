//coleção dinâmica de pares chave/valor

//criando um objeto à partir da função Object
const produto = new Object
produto.nome = 'Cadeira' //pode definir os atributos dinamicamente
produto.preco = 220
console.log(produto)

delete produto.preco //pode excluir os atributos dinamicamente
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:  'Raul',
        idade: 59,
        endereco: {
            logradouro: 'Rua abc',
            numero: 86
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: '19'
    }, {
        nome: 'Ana',
        idade: '21'
    }],
    calculaSeguro: function(){
        // ...
    }
}

console.log(carro)
console.log(carro.proprietario.nome)
console.log(carro.condutores)