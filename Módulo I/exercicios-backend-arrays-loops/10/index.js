const numeros = [1, 11, 4, 8];
//Encontrar o maior número
const maior = []
const menor = []

for(i = 0; i <= 1; i++){
    
    if(numeros[i] > numeros[i+1]){
        maior.push(numeros[i])
   } else{
       menor.push(numeros[i])
   }
}
console.log(maior - menor)
