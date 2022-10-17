let input = "cubos\newvelrabsocauboseln"

const linhas = input.trim().split("\n")
let senhaCorreta = linhas[0]
let senhaDigitada = linhas[1]

let acertos = 0
for (letra of senhaDigitada ){
    if(letra === senhaCorreta[acertos]){
        acertos++
    }
}

if(acertos === 5){
    console.log('SIM') 
} else {
    console.log('NAO') 
}


// console.log(input.includes('c'))
// console.log(senha.includes('u'))
// console.log(senha.includes('b'))
// console.log(senha.includes('o'))
// console.log(senha.includes('s'))