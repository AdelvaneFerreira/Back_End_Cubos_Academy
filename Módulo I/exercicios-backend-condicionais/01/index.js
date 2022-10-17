const jogada1 = "PEDRA"
const jogada2 = "TESOURA"

//seu código aqui

    if(jogada1 == "PEDRA" && jogada2 == "TESOURA"){
      console.log("PEDRA")
    
    } else if(jogada1 == "PEDRA" && jogada2 == "PAPEL") {
      console.log("PAPEL")
    
    } else if(jogada1 == "PAPEL" && jogada2 == "TESOURA"){
      console.log("TESOURA")
    
    }  else if(jogada1 == "TESOURA" && jogada2 == "PAPEL"){
      console.log("TESOURA")
    
    } else if(jogada1 == "PAPEL" && jogada2 == "PEDRA") {
      console.log("PAPEL")
    
    } else if(jogada1 == "TESOURA" && jogada2 == "PEDRA") {
      console.log("PEDRA")
      
    } else {
      console.log("EMPATE")
    }
