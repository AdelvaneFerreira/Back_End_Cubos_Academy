const cartaViradaPraCima = ["Q", "J", "K","A", 2, 3]

function truco(carta){
 
    if(carta === 'Q'){
      console.log('J')
    } else if(carta === 'J'){
      console.log('K')
    } else if(carta === 'K'){
      console.log('A')
    } else if(carta === 'A'){
      console.log('2')
    } else if(carta === '2'){
      console.log('3')
    } else {
      console.log('Q')
    }
  }

truco(3)