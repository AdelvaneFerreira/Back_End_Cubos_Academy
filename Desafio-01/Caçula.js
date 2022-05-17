
const eventoIdades = [12, 14, 18, 19, 24, 27]


function festa(lista){
  let menorIdade;
  for(let item of eventoIdades){
    
    if(item >= 18){
      if(menorIdade === undefined){
          menorIdade = item
      } else if(item < menorIdade){
        menorIdade = item
      }
    } 
  }
  if(menorIdade === undefined){
    console.log("CRESCA E APARECA")
  } else {
    console.log(menorIdade)
  }
}
festa(eventoIdades)