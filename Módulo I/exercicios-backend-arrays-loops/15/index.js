const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];
//numero par resto = 0 numero impar resto = 1

for (let i = 0; i < original.length; i++){
    let par = original[i]

    if(par % 2 == 0){
        pares.push(par)
    } else if(par % 2 == 1) {
        impares.push(par)
    }
  }
console.log(pares)
console.log(impares)
