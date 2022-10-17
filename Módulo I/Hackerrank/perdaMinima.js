


      let menorPrej = 99999
      for (let i=0; i<precos.length; i++){
          for(let j = i + 1; j<precos.length; j++){
              const comprar = precos[i]
              const vender  = precos[j]
              const prejuizo = comprar - vender 
              
              if(prejuizo > 0){
                  if(prejuizo <menorPrej){
                      menorPrej = prejuizo
                  }
              }
          }
      }
      console.log(menorPrej)