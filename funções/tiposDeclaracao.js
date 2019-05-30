// FUNCTION DECLARATION
console.log(soma(3, 5)) //pode chamar antes da declaração da função

function soma(x, y){
    return x + y
}



//FUNCTION EXPRESSION
const sub = function(x, y){
    return x - y
}
console.log(sub(3, 5)) //apenas depois da declaração da função




//NAMED FUNCTION EXPRESSION
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 5)) //apenas depois da declaração da função

