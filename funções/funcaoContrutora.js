function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado - usar let para variáveis
    let velocidadeAtual = 0

    //método publico - this deixa algo visivel fora do escopo
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    
    //método publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
