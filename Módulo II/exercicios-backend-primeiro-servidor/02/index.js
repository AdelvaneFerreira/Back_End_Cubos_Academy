const express = require('express')

const app = express()

let cronometroSeg = 0
let cronometroMin = 0

app.get('/', (req, res) =>{

  res.send(`Tempo atual do cronômetro: ${cronometroMin} minuto(s) e ${cronometroSeg} segundo(s)!`);   
});

app.get('/iniciar', (req, res) =>{
  
  const tempoMin = setTimeout(() => {
    cronometroMin++;

    res.send(`Tempo atual do cronômetro: ${cronometroMin} minuto(s) e ${cronometroSeg} segundo(s)!`);
    
  },60000)
  
  const tempo = setTimeout(() => {
    cronometroSeg++;

    res.send(`Tempo atual do cronômetro: ${cronometroMin} minuto(s) e ${cronometroSeg} segundo(s)!`);
    
  },1000)

  if(cronometroSeg >= 59){
    cronometroSeg = 0
  }
});


app.get('/pausar', (req, res) =>{

  res.send('Cronômetro pausado!')

});


app.get('/continuar', (req, res) =>{

  res.send('Cronômetro continuando!')

});

app.get('/zerar', (req, res) =>{

  let cronometroSeg = 0
  let cronometroMin = 0
res.send('Cronômetro zerado!')

});


app.listen(8000)