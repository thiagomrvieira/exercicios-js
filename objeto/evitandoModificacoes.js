// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

//verificando se o objeto é extensível
console.log('Extensível:', Object.isExtensible(produto))

// Permite alterar dados 
produto.nome = 'Borracha'
// Não permite adição
produto.descricao = 'Borracha escolar'
// Permite exclusão de atributos 
delete produto.tag 

console.log(produto)



//Object.seal
//não adiciona nem deleta atributos do objeto, mas permite alteração dos dados
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

//verificando se o objeto é selado
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)



// Object.freeze atributos e dados constantes