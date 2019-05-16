function tratarErro(error) {
}

function imprimirNomeGritado(obj) {
    
    try {
        console.log(obj.name.toUpperCase()+ '!!!')
    } catch (error) {
        tratarErro(error)
    }
}

const obj = {nome: 'Thiago'}

imprimirNomeGritado(obj)