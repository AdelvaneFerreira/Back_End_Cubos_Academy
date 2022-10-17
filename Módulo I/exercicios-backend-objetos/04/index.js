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
    }
]


for (let usuario of usuarios){
   let idade = usuario.idade

    if (idade < 18){
        //menor de idade
        maior_idade = false
    } else {
        //maior de idade 
        maior_idade = true
    }
}

