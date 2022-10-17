const nomes = ['Maria',  'João',  'José',  'Antonio',  'Beatriz', 'Camila', 'amanda'];


for(let i = 0; i < nomes.length; i++){
    let inicial = nomes[i][0]

    if(inicial === 'a' || inicial === 'A'){
        
        console.log(nomes[i])
    }
}
