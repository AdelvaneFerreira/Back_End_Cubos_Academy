const produto = [
    {
    nomeDoProduto:  "Budweiser",
    valorUnitario: 600,
    QtdComprada: 10
},
{
    nomeDoProduto: "Heineken",
    valorUnitario: 650,
    QtdComprada: 6
},
{
    nomeDoProduto: "Eisenbahn",
    valorUnitario: 750,
    QtdComprada: 5
    }
]

const comanda = {
    nome: "Adê",
    idade: 27,
    produto
}

let soma = 0
for (let produtos of produto){
   soma  += produtos.valorUnitario * produtos.QtdComprada
}
console.log(`Sra. ${comanda.nome}, o total a pagar é R$${soma/100}`)

 const {nome, idade, ... outros } = comanda

console.log(nome, idade)
console.log(outros)

const array = [0, 1, 2, 3, 4, 5, 6]

const [a, b, ...resto] = array

console.log(a, b , resto)