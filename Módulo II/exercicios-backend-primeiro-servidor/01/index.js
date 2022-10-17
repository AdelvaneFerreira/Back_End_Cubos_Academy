const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

const express = require('express')

const app = express()



app.get('/jogador', (req, res)=>{
  console.log(req)
  for (let i = 0; i < jogadores.length; i++){
  
  
    res.send(`Agora é a vez de ${jogadores[i]}!`)
    
     }
  })
     
app.listen(8000)

