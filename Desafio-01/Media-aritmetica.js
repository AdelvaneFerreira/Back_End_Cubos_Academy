const economias = [10, 20 ,30, 40, 50]

// const mediaDia = economias.reduce((acc, item) => {
//   return acc + item 
// })
// console.log(`A média diária é de R$${mediaDia / economias.length},00`)

function media(valores){
    let soma = 0
    for(let valor of valores){
        soma += valor
    }
    console.log(soma/valores.length)
}
media(economias)