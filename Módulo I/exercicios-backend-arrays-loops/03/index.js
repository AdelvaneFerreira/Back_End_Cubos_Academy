const numeros = [54, 22, 14, 87, 10, 284];


let encontrado = false
for(let i = 0; i <= numeros.length; i++){

    const item = numeros[i]

if(item === 10){
    console.log(`10 está na posição ${i}.`)
    encontrado = true
    break
 }
}

if (!encontrado){
    console.log("-1 ")
}