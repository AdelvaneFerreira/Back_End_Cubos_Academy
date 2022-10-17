const conexao = require("../Config/conection");
const jwt = require('jsonwebtoken');
const secret = require('../../secret');
const uselFunctions = require('../controllers/userController');

const verifyLogin = async (req, res, next) => {

    const { runResponse, displayError } = uselFunctions
    const { authorization } = req.headers;

    try {
        if (!authorization) {
            return runResponse(400, 'Para acessar este recurso um token de autenticação válido deve ser enviado.', res);
        }
        const token = authorization.replace('Bearer', '').trim();

        const { id } = jwt.verify(token, secret);
        const query = 'select * from usuarios where id = $1';

        const { rows, rowCount } = await conexao.query(query, [id]);
        if (rowCount === 0) {
            return runResponse(404, 'O usuário não foi encontrado', res);
        }

        const { senha, ...usuario } = rows[0];

        req.usuario = usuario;
        next();
    } catch (error) {
        if (error.message.includes('invalid') || error.message.includes('jwt') || error.message.includes('Unexpected token') || error.message.includes('expired')) {
            return runResponse(401, "Para acessar este recurso um token de autenticação válido deve ser enviado.", res)
        }
        displayError(error, res);
    }
}

module.exports = verifyLogin