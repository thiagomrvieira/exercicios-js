

//Criação de função de forma literal
function fun1(){ }


//Armazenando em uma variável
const fun2 = function() { }


//Armazenando detro de um Array
const array = [function(a, b){ return a + b}, fun1, fun2]
//executando a primeira função (indice 0)
console.log(array[0](2, 3))


//Armazenando dentro de um atributo de um obj
const obj = { }
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())