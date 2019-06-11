console.log(typeof Array) //tipo array = Função
console.log(typeof []) // Array literal = Objeto
console.log(typeof new Array) //new + função = Objeto

//Criando array
let aprovados = new Array('Bia', 'Ana', 'Carlos') //forma não recomendada
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos'] //Notação literal
console.log(aprovados)
console.log(aprovados[0])

//add ou substituindo dados de um indice de um array
aprovados[3] = 'Paulo'

//formato ideal para add novos elementos
aprovados.push('Abia')
console.log(aprovados)

//ordenando array
aprovados.sort()
console.log(aprovados)

// deletando elementos
delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos']

//adc ou exclui um ou varios elementos
console.log(aprovados)
aprovados.splice(1, 1) //excluindo 1 elemento à partir do índice 1
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos']
aprovados.splice(1, 0, 'el01', 'el02') //excluindo 0 elementos à partir do índice 1 e add 2 novos
console.log(aprovados)


