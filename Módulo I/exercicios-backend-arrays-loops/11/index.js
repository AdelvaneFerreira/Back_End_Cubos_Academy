const original = [5, 7, 13, 17, 26, 34, 118, 245];

let resultado = []

for (let i = 0; i < original.length; i++){
    let x = original[i]

    if(x >=10 && x <= 20 || x >=100){

        resultado.push(x)
    }
}  console.log(resultado)
