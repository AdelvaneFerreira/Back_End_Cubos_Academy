const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const secret = require('../../secret');
const uselFunctions = require('./userController');


const userLogin = async (req, res) => {
    const { runResponse, displayError, findUser } = uselFunctions
    const { email, senha } = req.body;

    try {
        if (!email || !senha) {
            return runResponse(400, "Todos os campos devem estar preenchidos", res)
        }

        const userFound = await findUser(email);

        if (userFound.rowCount === 0) {
            return runResponse(404, "Nenhum usuário encontrado.", res)
        }

        let user = userFound.rows[0];//pega o primeiro usuario encontrado
      
        //Compara a senha digitada com a senha do usuário//
        const verifiedPassword = await bcrypt.compare(senha, userFound.rows[0].senha);


        if (
            userFound.rows[0].email !== email ||
            !verifiedPassword
        ) {
            return runResponse(404,  "Usuário e/ou senha inválido(s).", res);
        }
        
        let { senha: password, ...userWithoutPassword } = user;
        const token = jwt.sign(
            {
                id: user.id,
                nome: userFound.nome,
                email: userFound.email
            },
            secret,
            {
                expiresIn: '2h'
            }
        );

        return res.status(200).json({
            user: userWithoutPassword,
            token: token
        });

    } catch (error) {
        displayError(error, res);
    }
}

module.exports = { userLogin }