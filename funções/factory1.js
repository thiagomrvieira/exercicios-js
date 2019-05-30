// Factory simples
function criarPessoa(){
    return{
        nome: 'Thiago',
        sobrenome: 'Maciel'
    }
}

console.log(criarPessoa())

function criarPessoa2(nome, sobrenome){
    return{
        nome,
        sobrenome
    }
}

console.log(criarPessoa2("José", "Silva"))