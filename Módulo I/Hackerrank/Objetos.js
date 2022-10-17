const  pessoa = {
    nome: " José",
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ["Jr", "Juninho", "J"]
}
let textoCNH = ( pessoa.temCNH ? " possui CNH" : " não possui CNH")

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e os seguintes apelidos:`)
for (let apelido of pessoa.apelidos ){
    console.log(apelido)
}