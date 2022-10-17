const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]

const filtro = usuários.filter((x) =>{
    if( x.idade >= 18 && x.idade <= 65){
        return true
    }
})

console.log(filtro)

const temCNH = filtro.every(x => x.habilitado)

if(temCNH){
    console.log('todos passaram no teste')
} else {
    console.log('todos precisam estar habilitados')
}