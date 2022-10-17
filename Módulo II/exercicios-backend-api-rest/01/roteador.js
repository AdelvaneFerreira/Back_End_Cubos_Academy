const express = require('express')
const controle = require('./controladores')

const roteador = express()

//Consulta todos os alunos
roteador.get('/alunos', controle.consultaAlunos)

//Consulta pelo ID
roteador.get('/alunos/:idConsultado', controle.consultaID)

//Criar um novo aluno
roteador.post('/alunos', controle.criarNovoAluno)

//Exclui um aluno
roteador.delete('alunos/:idConsultado',controle.excluirAluno)

module.exports = roteador