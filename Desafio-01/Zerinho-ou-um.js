const jogadores = [
    {
        nome: "Camila",
       jogada: 0 
    },
    {
        nome: "Tereza",
       jogada: 0 
    },
    {
        nome: "Renata",
        jogada: 0 
    },
    {
        nome: "Regiane",
       jogada: 1 
    }
    ]
    
    function zerinho(jogadores){
      const um = [] 
    const zero = []
  
    for(let item of jogadores){
     
    if (item.jogada === 0){
      zero.push(item)
  
    } else {
      um.push(item)
      }
    }
  
  if(um.length === 1){
    console.log(um[0].nome)
  } else if(zero.length === 1){
    console.log(um[0].nome)
  } else {
    console.log('NINGUEM')
  }
    }
  
    zerinho(jogadores)