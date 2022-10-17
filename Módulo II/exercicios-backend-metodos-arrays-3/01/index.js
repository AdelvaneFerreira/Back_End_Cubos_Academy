//Ordenar o array abaixo em ordem crescente.
const numerosA = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
numerosA.sort( (a, b)=> a - b)
console.log(numerosA)

//Ordenar o array abaixo em ordem decrescente.
const numerosB = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
numerosB.sort( (a, b)=> b - a)
console.log(numerosB)

// Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode.
const numerosC = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
numerosC.sort()
console.log(numerosC)

//Ordenar o array abaixo em ordem alfabética.
const frutasA = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutasA.sort((a, b)=>{
    return a.localeCompare(b)
})
console.log(frutasA)

//Ordenar o array abaixo em ordem alfabética decrescente.
const frutasB = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutasB.sort((a, b)=>{
    return b.localeCompare(a)
})
console.log(frutasB)