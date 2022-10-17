const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

console.log(filaDeDentro)
console.log(filaDeFora)

for(let i = 0; i <= 1; i++){
    filaDeDentro.push(filaDeFora[0])
    console.log(filaDeDentro)
    filaDeFora.shift()
    console.log(filaDeFora)
}


console.log(filaDeDentro)
console.log(filaDeFora)
