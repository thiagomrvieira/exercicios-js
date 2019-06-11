const obj = {a: 1, b: 2, c: 3, soma(){ return a + b + c}}
console.log(JSON.stringify(obj))

//Formatos inváldos paa coverter texto (json) para Objeto
//console.log(JSON.parse("{ a:1, b:2, c:3 }"))
//console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3 }"))

// formato válido:
console.log(JSON.parse('{ "a":1, "b":2, "c":3 }'))