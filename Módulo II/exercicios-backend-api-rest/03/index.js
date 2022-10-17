const express = require('express')
const app  = express()

app.use(express.json())


const livros = [
  {
      id: 1,
      titulo: "A Odisséia de Jonas",
      autor: "Thomas Crawling",
      ano: 2001,
      numPaginas: 197
  },
  {
      id: 2,
      titulo: "Jonas e a sociedade escondida",
      autor: "Claire Crawling",
      ano: 2004,
      numPaginas: 158
  },
  {
      id:3,
      titulo: "Minha história",
      autor: "Michelle Obama",
      ano: 2018,
      numPaginas: 464
    
  }
];
let proximoId = 4

app.get("/livros", (req, res) =>{
  res.json(livros)
})

app.get('/livros/:idConsultado', (req, res) =>{
  
  const livro = livros.find((livro) => livro.id === Number(req.params.idConsultado))

  res.json(livro)
})
//Adiciona um novo elemento na lista
app.post('/livros', (req, res) => {
  
  const novoLivro = {
    id: proximoId,
    titulo: req.body.titulo,
    autor:req.body.autor,
    ano: req.body.ano,
    numPaginas:req.body.numPaginas
  }
  
    livros.push(novoLivro)
   
    proximoId += 1
  
    res.json(livros)
  
  })


app.listen(8000)

console.log(livros)