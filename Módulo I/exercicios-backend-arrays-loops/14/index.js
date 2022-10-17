const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

//comparar um numero com outro
//push insere na última posição
//Como ordenar esses números depois de separá-los?
const resultado = []

for(i = 0; i <arrayA.length; i++){
    
    if(arrayA[i] < arrayB[i]){
        resultado.push(arrayA[i])
    
    } else {
        resultado.push(arrayB[i])
    }

}
console.log(resultado)
