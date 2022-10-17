const alunos = require('./dados')

let proximoId = 6

function consultaAlunos(req, res) {
  res.json(alunos)
}


function consultaID(req, res) {

  const aluno = alunos.find(
    (aluno) => aluno.id === Number(req.params.idConsultado))

    if(!aluno){
      res.status(404)
      res.json(`Erro: aluno ${req.params.idConsultado} não foi encontrado.`)
      return
    }
  res.json(aluno)
  
}
//Regras de validação
function validarAluno(aluno){
  if(!aluno.nome){
  return  "O campo 'nome' é obrigatório. Por favor preencha!"
  }
  
  if(!aluno.idade){
    return "O campo 'idade' é obrigatório. Por favor preencha!"
  }

  if(typeof aluno.nome != 'string'){
    return "O nome deve ser preenchido por um texto! Corrija e tente novamente."
  }

  if(typeof aluno.idade != 'number'){
    return "A idade deve ser preenchido por um número! Corrija e tente novamente."
  }

  if(!aluno.nome.includes(" ")){
    return "Deve ser preenchido com nome e sobrenome."
  }
}

function criarNovoAluno(req, res) {
  const erro = validarAluno(req.body)

  if(erro){
    res.status(400)
    res.json({erro})
    return
  }
  const novoAluno = {
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    idade: req.body.idade,
    curso: req.body.curso,
    id: proximoId
  }
  alunos.push(novoAluno)
  proximoId += 1
  res.json(novoAluno)
}

function excluirAluno (req, res){

  const aluno = alunos.find((aluno) => aluno.id === Number(req.params.idConsultado))
    
  const indice = alunos.indexOf(aluno)
    alunos.splice(indice, 1)

    res.json("Excluído")
}
module.exports = {consultaAlunos, consultaID, criarNovoAluno, excluirAluno}