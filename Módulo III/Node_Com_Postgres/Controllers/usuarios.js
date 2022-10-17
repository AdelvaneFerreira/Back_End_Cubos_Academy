const conexao = require('../conexao');
const securePassword = require('secure-password');
const pwd = securePassword();

const listarUsuarios = async (req, res) => {
    try{
        const {rows: usuarios} = await conexao.query('SELECT * FROM usuarios');
        return res.status(200).json(usuarios);
    } catch{
        return res.status(400).json({error: 'Erro ao listar usuarios'});
    }
}

const cadastrarUsuario = async (req, res) => {
    const {nome, email, senha} = req.body;

    if(!nome){
        return res.status(400).json({error: 'Nome é obrigatório'});
    }
    if(!email){
        return res.status(400).json({error: 'email é obrigatório'});
    }
    if(!senha){
        return res.status(400).json({error: 'senha é obrigatório'});
    }
    try {
        const query = 'select * from usuarios where email = $1';
        const usuario = await conexao.query(query, [email]);

        if(usuario.rowCount > 0){
            return res.status(400).json({error: 'Este email  já foi cadastrado'});
        }
    } catch (error) {
        return res.status(400).json({error: 'Erro ao cadastrar usuário'});
    }
    try{
        const hash = (await pwd.hash(Buffer.from(senha))).toString('hex');

        const usuario = await conexao.query('insert into usuarios (nome, email, senha) values ($1, $2, $3)', [nome, email, hash]);

        if(usuario.rowCount === 0){
            return res.status(404).json('Não foi possível cadastrar o usuario');
        }
        res.status(200).json('usuario cadastrado com sucesso.');
    } catch (error){
        console.log(error);
        return res.status(400).json({error: 'Erro ao cadastrar usuario.'});
    }
}

const login = async (req, res) => {
    const {email, senha} = req.body;

    if(!email){
        return res.status(400).json({error: 'email é obrigatório'});
    }
    if(!senha){
        return res.status(400).json({error: 'senha é obrigatório'});
    }
    try {
        const query = 'select * from usuarios where email = $1';
        const usuarios = await conexao.query(query, [email]);

        if(usuarios.rowCount === 0){
            return res.status(400).json({error: 'Email ou senha incorretos.'});
        }
        const usuario = usuarios.rows[0];

        const result = await pwd.verify(Buffer.from(senha), Buffer.from(usuario.senha, 'hex'));

        switch (result) {
            case securePassword.INVALID_UNRECOGNIZED_HASH:
            case securePassword.INVALID:
                return res.status(400).json({error: 'Email ou senha incorretos.'});
            case securePassword.VALID:
               break;
            case securePassword.VALID_NEEDS_REHASH:
              try {
                  const hash = (await pwd.hash(Buffer.from(senha))).toString('hex');
                  const query = 'update usuarios set senha = $1 where id = $2';
                  await conexao.query(query, [hash, email]);
              } catch{ 
              }
              break;
            default:
                return res.json(`Olá, seu nom e é ${usuario.nome}`);
            } 
        }catch (error) {
        return res.status(400).json(error.message);
    }
}




    module.exports = {
    cadastrarUsuario, listarUsuarios, login
};