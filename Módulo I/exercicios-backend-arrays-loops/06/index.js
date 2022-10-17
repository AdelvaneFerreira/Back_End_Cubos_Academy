const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0 

for(let i = 0; i < numeros.length; i++){
    
    const num = numeros[i]

if ( num % 2 == 0){
    soma += num
 }
}
console.log(`O somatório dos números pares é ${soma}.`)