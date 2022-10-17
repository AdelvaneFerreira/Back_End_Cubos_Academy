const disjuntores = [false, false, true, false, false, true, false, false];

const resultado = []

for (let i = 0; i < disjuntores.length; i++){
    let chave = disjuntores[i]

    if(chave == true){
        resultado.push(chave)
  }
}
console.log(resultado)
