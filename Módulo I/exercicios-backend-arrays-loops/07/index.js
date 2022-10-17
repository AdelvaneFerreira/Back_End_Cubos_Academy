
const nomes = ["Ana", "Joana", "Adelvane", "Carlos", "altair", "amanda"];

const resultado = []

for (let nome of nomes){
    if(nome[0] === "A" || nome[0] === "a"){
        resultado.push(nome)
    }
}
console.log(nomes)
console.log(resultado)