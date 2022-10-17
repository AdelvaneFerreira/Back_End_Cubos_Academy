const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function (){
        if(this.ligado){
            console.log("Este carro já está ligado.")
        } else{
            !this.ligado
            console.log(true)
        } 
    }, 
    desligar: function () {
        if(!this.ligado){
            console.log("Esse carro já está desligado.")
        } else {
            this.ligado
            console.log(true)
        }
    },
    acelerar: function (){
        if(!this.ligado){
            console.log('Não é possível acelerar um carro desligado.')
        } else{
            this.velocidade = 10
            console.log(`A velocidade do carro é ${this.velocidade}km/h`)
        }
    },
    desacelerar: function (){
        if(!this.ligado){
            console.log("Não é possível desacelerar um carro desligado.")
        } else{
            this.velocidade -10
            console.log(`A velocidade do carro é ${this.velocidade}km/h`)
        }
    }
}
carro.ligar()
carro.desligar()
carro.acelerar()
carro.desacelerar()