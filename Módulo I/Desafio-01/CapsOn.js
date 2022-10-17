let input = "aDELVANE"
let input2 = ""

let primeiraLetra = input[0].toUpperCase() + input.slice(1).toLowerCase();// Transforma a primeira em maiúscula e o restante em minúsculo.

let primeiraLetra2 = input[0].toLowerCase() + input.slice(1).toLowerCase() //Transforma todas em minusculas
    
let MAIUSCULA = input[0].toUpperCase()
// console.log(MAIUSCULA)//Imprime a primeira letra em maiuscula

//
if(input[0]=== input[0].toUpperCase() && input.slice(1).toUpperCase() === input.slice(1) ){
console.log(input.toLowerCase())
} else if(input[0] === input[0].toLowerCase() && input.slice(1).toUpperCase() === input.slice(1)){
    console.log(primeiraLetra)
} else {
    console.log(input)
}
