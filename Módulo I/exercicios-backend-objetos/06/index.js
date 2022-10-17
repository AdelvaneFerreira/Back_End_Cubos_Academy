const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
//Percorrer o array,
//Separar os jovens dos adultos

const jovens = []
const adultos = []

for ( let usuario of usuarios){
    let idade = usuario.idade

    if(idade < 18){
        jovens.push(usuario)
    } else {
        adultos.push(usuario)
    }
}

console.log(jovens, adultos)