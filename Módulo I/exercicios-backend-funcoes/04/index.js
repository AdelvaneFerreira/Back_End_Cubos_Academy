const contaBancaria =  {
    nome: "Maria",
    saldo: 20,
    historicos: [],
    depositar: function(valor){
            let dinheiro = valor
            saldo = valor + this.saldo
            console.log(`Foram depositados R$${valor}. O saldo atual é de R$${saldo}.`)
            this.historicos.push(`Tipo depósito: ${valor}`)
            console.log(`Deposito de R$${valor} realizado para o cliente: ${this.nome}.`)
    },
    sacar: function (valor){
        if (valor > this.saldo ){
        console.log(`Saldo insuficiente para o saque de: Maria`)
    } else {
        
        console.log(`Saque de R$${valor} realizado para o cliente: ${this.nome}. O saldo atual é de R$${this.saldo- valor}.`)

    }

    }
}

contaBancaria.sacar(20)
