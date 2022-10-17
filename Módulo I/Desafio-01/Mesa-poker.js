const valores = [2,5,7,10,12,0]

 function mesaDePoker(min, max, valores){
   let jogo = []
   for( let item of valores){
    if(item >= min && item <= max){
      jogo.push(item)
    }
    
   } 
   console.log (jogo)
 }
 
mesaDePoker(3,10, valores)

