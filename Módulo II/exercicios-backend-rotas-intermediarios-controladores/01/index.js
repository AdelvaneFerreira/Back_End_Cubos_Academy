express = require('express')

const app = express()

app.get('/somar', (req, res) =>{
  console.log(req.query)
  const primeiro = Number(req.query.num1)
  const segundo = Number(req.query.num2)

  res.send(`O valor da soma é  ${(primeiro + segundo)}.`)
 //http://localhost:8000/somar?num1=12&&num2=12
})

app.get('/subtrair', (req, res) =>{
  console.log(req.query)
  const primeiro = Number(req.query.num1)
  const segundo = Number(req.query.num2)

  res.send(`O valor da subtração é  ${(primeiro - segundo).toString()}.`)
})

app.get('/dividir', (req, res) =>{
  console.log(req.query)
  const primeiro = Number(req.query.num1)
  const segundo = Number(req.query.num2)

  res.send(`O valor da divisão é  ${(primeiro / segundo).toString()}.`)
})

app.get('/multiplicar', (req, res) =>{
  console.log(req.query)
  const primeiro = Number(req.query.num1)
  const segundo = Number(req.query.num2)

  res.send(`O valor da multiplicação é  ${(primeiro * segundo).toString()}.`)
})

app.listen(8000)