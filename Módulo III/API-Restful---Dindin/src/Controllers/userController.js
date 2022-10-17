const conection = require('../Config/conection');
const bcrypt = require("bcrypt");

function displayError(error, res) {
    console.log(error.message);
    return res.status(400).json({
        "mensagem": error.message
    });
}

function runResponse(statusCode, message, res) {
    return res.status(statusCode).json({
        "mensagem": message
    });
}

const findUser = async (email) => {
    const verifyEmail = 'select * from usuarios where email = $1';
    return await conection.query(verifyEmail, [email]);
}

const userData = async (req, res) => {
    const { usuario } = req;

    try {
        return res.status(200).json(usuario);
    } catch (error) {
        displayError(error, res);
    }
}

const registerUser = async (req, res) => {
    const {nome,email,senha} = req.body;

    try {
        if(!nome){
            return runResponse(400, "O campo nome é obrigatório.", res);
        }
        if(!email){
            return runResponse(400, "O campo email é obrigatório.", res);
        }
        if(!senha){
            return runResponse(400, "O campo senha é obrigatório.", res);
        }
    
    try {
        const query = 'select * from usuarios where email = $1';
        const usuario = await conection.query(query, [email]);

        if(usuario.rowCount > 0){
            return runResponse(400, "Este email já está cadastrado", res)
        }
    } catch (error) {
        return runResponse(400, "Erro ao cadastrar usuário", res)
    }
    try{
        const hash =  await bcrypt.hash(senha, 10);

        const usuario = await conection.query('insert into usuarios (nome, email, senha) values ($1, $2, $3)', [nome, email, hash]);

        if(usuario.rowCount === 0){
            return runResponse(404, "Não foi possível cadastrar o usuario", res);
        }
        return runResponse(201,"Usúario cadastrado com sucesso",res);

    } catch (error){
        return runResponse(400, "Erro ao cadastrar usuário", res)
    }
    } catch (error) {
        displayError(error, res);
    }
}


const updateUser = async (req, res) => {
    const { usuario } = req;
    const { nome, email, senha, } = req.body;
    try {

        if (!nome || !email || !senha ) {
            return runResponse(400, "Todos os campos devem estar preenchidos", res)
        }
        const { rowCount } = await findUser(email);

        if (rowCount > 0) {
            return runResponse(400, "Este email já está cadastrado", res)
        }
        const encryptedPassword = await bcrypt.hash(senha, 10);

      const query = 'update usuarios set nome = $1, email = $2, senha = $3 where id = $4';

        const updatedUser = await conection.query(query, [nome, email, encryptedPassword, usuario.id]);
      
        if (updatedUser.rowCount === 0) {
            return runResponse(400, 'O e-mail informado já está sendo utilizado por outro usuário.', res);
        }
    
        return runResponse(204, 'Requisição bem sucedida', res);
    } catch (error) {
        displayError(error, res);
    }

}

module.exports = {
    registerUser,
    displayError,
    runResponse,
    findUser,
    userData,
    updateUser
}