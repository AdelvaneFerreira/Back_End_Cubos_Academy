const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}
function imprimirResumoDoCarrinho(parametro){
    console.log(parametro.nomeDoCliente)

    let itens = 0
    for(let i = 0; i < parametro.produtos.length; i++){
    let quantidade = parametro.produtos[i].qtd
    itens += quantidade
}
console.log(`Total de itens: ${itens}.`)


let valorApagar = 0
for(let i = 0; i < parametro.produtos.length; i++){
    let preço = parametro.produtos[i].precoUnit/100
    let qtds= parametro.produtos[i].qtd
    valorApagar += preço*qtds
 
}
console.log(`Total a pagar: R$${valorApagar},00.`)


}

imprimirResumoDoCarrinho(carrinho)