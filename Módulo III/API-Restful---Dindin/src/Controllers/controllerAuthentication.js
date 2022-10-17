const conection = require('../Config/conection');
const bcrypt = require("bcrypt");
const users = require('./userController')

const { displayError, runResponse} = users

const listCategories = async (req, res) =>{

    try {   
            const query = 'select * from categorias';
            const allCategories = await conection.query(query);
            
            return res.status(200).json(allCategories.rows)
    } catch (error) {
        displayError(error, res);        
    }
}

const listTransactions = async (req, res) =>{

    try{
        const query = 'select * from transacoes';
        const findTransactions = await conection.query(query);
    
    return res.status(200).json(findTransactions.rows)
    } catch (error) {
        displayError(error, res);        
    }

if(findTransactions.rowCount === 0){
    return runResponse(404, 'Não há transações cadastradas', res)}
}

 const detailTransaction = async (req, res) =>{
    const {usuario} = req;
    const { id } = req.params; 

    if(!usuario){
        return runResponse(401, 'Para acessar este recurso um token de autenticação válido deve ser enviado.', res)
    };

    if(!id){
        return runResponse(400, 'O id da transação deve ser enviado.', res)
    }
    try {
        const findTransaction = await conection.query('select * from transacoes where id = $1', [id]);
        const transaction = findTransaction.rows[0];

        if(!transaction){
            return runResponse(404, 'Não há transação cadastrada com esse id.', res)
        }
        return res.status(200).json(transaction)
    } catch (error) {
        displayError(error, res);
    }
 }

 const registerTransaction = async (req, res) =>{
    const {usuario} = req;
    const { descricao, valor, data, categoria_id, tipo } = req.body;

    if(!usuario){
        return runResponse(401, 'Para acessar este recurso um token de autenticação válido deve ser enviado.', res)
    };

    if(!categoria_id){
        return runResponse(400, 'A categoria da transação deve ser enviada.', res)
    }

    if(!descricao){
        return runResponse(400, 'A descrição da transação deve ser enviada.', res)
    }

    if(!valor){
        return runResponse(400, 'O valor da transação deve ser enviado.', res)
    }

    if(!data){
        return runResponse(400, 'A data da transação deve ser enviada.', res)
    }

    if(!tipo){
        return runResponse(400, 'O tipo da transação deve ser enviado.', res)
    }

    try {
        const query = 'insert into transacoes (descricao, valor, data, categoria_id, tipo, usuario_id) values ($1, $2, $3, $4, $5, $6)';
        const values = [descricao, valor, data, categoria_id, tipo, usuario.id]
        const insertTransaction = await conection.query(query, values);
        const transaction = insertTransaction.rows[0];

        return res.status(201).json(transaction)
    } catch (error) {
        displayError(error, res);
    }
 }

    const updateTransaction = async (req, res) =>{
            const {usuario} = req;
            const { id } = req.params;
            const { descricao,  valor, data, categoria_id, tipo} = req.body;

            if(!usuario){
                return runResponse(401, 'Para acessar este recurso um token de autenticação válido deve ser enviado.', res)
            };

            if(!id){
                return runResponse(400, 'O id da transação deve ser enviado.', res)
            };

            if(!descricao){
                return runResponse(400, 'A descrição da transação deve ser enviada.', res)
            };

            if(!valor){
                return runResponse(400, 'O valor da transação deve ser enviado.', res)
            };

            if(!data){
                return runResponse(400, 'A data da transação deve ser enviada.', res)
            }

            if(!categoria_id){
                return runResponse(400, 'A categoria da transação deve ser enviada.', res)
            }

            if(!tipo){
                return runResponse(400, 'O tipo da transação deve ser enviado.', res)
            };

            try {
                const query = 'update transacoes set descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5 where id = $6';

                const values = [descricao, valor, data, categoria_id, tipo, id];

                const updateTransaction = await conection.query(query, values);
                const transaction = updateTransaction.rows[0];

                return res.status(200).json(transaction)
            }   catch (error) {
                displayError(error, res);
            };
    }

    const deleteTransaction = async (req, res) =>{
        const {usuario} = req;
        const { id } = req.params;

        if(!usuario){
            return runResponse(401, 'Para acessar este recurso um token de autenticação válido deve ser enviado.', res)
        };

        if(!id){
            return runResponse(400, 'O id da transação deve ser enviado.', res)
        };

        try {
            const query = 'delete from transacoes where id = $1';
            const values = [id];

            const deleteTransaction = await conection.query(query, values);

            const transaction = deleteTransaction.rows[0];

            return res.status(200).json(transaction)
        } catch (error) {
            displayError(error, res);
        };
    }

    const transactionsExtracts = async (req, res) =>{
        const {usuario} = req;

        try {
            const query = 'select * from transacoes where usuario_id = $1';
            const values = [usuario.id];

            const extractTransactions = await conection.query(query, values);
            const transactions = extractTransactions.rows;

            let input = [];
            let output = [];

                transactions.forEach(transaction => {
                    if(transaction.tipo === 'entrada'){
                        input.push(transaction);
                    }
                    if(transaction.tipo === 'saida'){
                        output.push(transaction);
                    }
                })
        
               const extract = {
                    entrada: input,
                    saida : output
                }

            return res.status(200).json(extract)
        } catch (error) {
            displayError(error, res);
        }
    }


    //listar as transações por categoria - Atividade extra (não obrigatória) - Não será implementado neste projeto
    const listTransactionsByCategory = async (req, res) =>{
        
    }

module.exports = {
        listCategories, 
        listTransactions,
        detailTransaction,
        registerTransaction,
        updateTransaction,
        deleteTransaction,
        transactionsExtracts,
        listTransactionsByCategory
    }