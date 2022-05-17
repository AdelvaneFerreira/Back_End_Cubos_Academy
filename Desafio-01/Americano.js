const numeros = [12, 13, 14, 15]

function americano(numeros){
  let soma = 0

for(let item of numeros){
  soma = soma +item
}
const resto = soma  % numeros.length

if( resto === 0){
  console.log(numeros.length)
} else {
  console.log(resto)
  }
}
americano(numeros)