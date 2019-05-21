let dobro = function (a){
    return 2 * a
}

// o mesmo que:
dobro = (a) => {
    return 2 * a
}

//função com uma única linha pode ser assim
dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))




let ola = function(){
    return 'Olá'
}

//com arrow function
ola = () => 'Olá'


console.log(ola())