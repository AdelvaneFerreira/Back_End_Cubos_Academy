let identificador = "123";
let nome = "josé silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', ' administrativo', ' geral'];

let id = identificador.padStart(6,'000')
console.log(id)
console.log(email.trim())
console.log(tags.toString())

let newArr= nome.split(" ")
 
for(let i=0; i < 3;i++){
   let string = newArr[i]
   string = newArr[i][0].toUpperCase() + string.substr(1)

   console.log(string)
}