const letras = ["A", "a", "B", "C", "E", "e"];

let qtd = false

for (let i = 0; i < letras.length; i++){
    let letra = letras[i]

    if(letra === "E" || letra === "e"){
        qtd++
    }
}
console.log(`Foram encontradas ${qtd} letras "E" ou "e".`)

if (!qtd){

console.log('Nenhuma letra "E" ou "e" foi encontrada.')
}