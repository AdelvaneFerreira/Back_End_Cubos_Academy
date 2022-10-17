const texto = "Aprenda programar do zero na Cubos Academy";
let min = texto.toLowerCase()

let resultado = min

let url = ''

while(resultado !== url){
    url = resultado
    resultado = url.replace(' ', '-')
}
console.log(url)