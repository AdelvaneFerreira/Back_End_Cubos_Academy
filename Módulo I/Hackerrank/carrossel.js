let indice = 0

for (let item of sequencia){
    if(item === "> "){
        indice++
    } else{
        indice--
    }
    if(indice === -1){
        indice = 6
    } else if(indice === 7){
        indice = 0
    }
}
console.log(indice)