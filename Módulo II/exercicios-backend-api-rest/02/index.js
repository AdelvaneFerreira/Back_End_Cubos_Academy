express = require('express')
const app = express()
app.use(express.json())

const convidados = [
  {
    nome:"Carlos",
    id:1
  }, 
  {
    nome:"Amanda",
    id:2
},
{ 
  nome:"Fernanda",
  id:3
}, 
{
  nome: "Juliana",
  id:4
},{
  nome: "Lucas",
  id:5
},
{
  nome: "Roberto",
  id:6
} 
];
let proximoId = 7

app.get("/convidados", (req, res) =>{
  res.json(convidados)
})

//Procurar pelo nome
app.get('/convidados/:nome', (req, res) =>{

  const convidado = convidados.find((convidado) => convidado.nome === req.params.nome)

if(convidado ){
  res.json("Convidado presente.")
} else{
  res.json("O convidado buscado não está presente na lista.")
}

})


//Adiciona um novo convidado na lista
app.post('/convidados', (req, res) => {
  const novoConvidado = {
    nome: req.body.nome,
    id: proximoId
  }

  if(req.body.nome){
    convidados.push(novoConvidado)
    proximoId +=1
    res.json(`O convidado foi adicionado.`)

  } else{
    res.json("O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.")
  }
  
})


app.delete("/convidados/:nome", (req, res) =>{
  const convidado = convidados.find((convidado) => convidado.nome === req.params.nome)

  const indice = convidados.indexOf(convidado)
  convidados.splice(indice, 1)

  res.json("Convidado removido.")

})


app.listen(8000)