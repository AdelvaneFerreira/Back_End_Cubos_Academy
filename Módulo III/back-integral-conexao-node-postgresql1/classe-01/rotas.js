const express = require('express');
const autores = require('./Controllers/autores');
const livros = require('./Controllers/livros');
const usuarios = require('./Controllers/usuarios');

const rotas = express();

//Autores
rotas.get('/autores', autores.listarAutores);
rotas.get('/autores/:id', autores.obterAutor);
rotas.post('/autores', autores.cadastrarAutor);
rotas.put('/autores/:id', autores.atualizarAutor);
rotas.delete('/autores/:id', autores.excluirAutor);

//Livros
rotas.get('/livros', livros.listarLivros);
rotas.get('/livros/:id', livros.obterLivro);
rotas.post('/livros', livros.cadastrarLivro);
rotas.put('/livros/:id', livros.atualizarLivro);
rotas.delete('/livros/:id', livros.excluirLivro);

//Usuários
rotas.get('/usuarios', usuarios.listarUsuarios);
rotas.get('/usuarios/:id', usuarios.obterUsuario);
rotas.post('/usuarios', usuarios.cadastrarUsuario);
rotas.put('/usuarios/:id', usuarios.atualizarUsuario);
rotas.delete('/usuarios/:id', usuarios.excluirUsuario);

module.exports = rotas;