const conexao = require('../conexao');

const listarUsuarios = (req, res) => {
try {
    const {rows: usuarios} = conexao.query('SELECT * FROM usuarios');
    return res.status(200).json(usuarios);
} catch (error) {
    return res.status(400).json('Erro ao listar usuários');
}
}
const obterUsuario = (req, res) => {

}

const cadastrarUsuario = (req, res) => {

}

const atualizarUsuario = (req, res) => {

}

const excluirUsuario = (req, res) => {

}
