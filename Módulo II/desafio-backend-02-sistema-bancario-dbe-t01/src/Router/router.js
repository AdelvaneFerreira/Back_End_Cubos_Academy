//verbos
const express = require('express');
const  account = require('../Controllers/account');
const transaction = require('../Controllers/transaction');

const router = express();

router.get("/contas", account.listar_contas);
router.post("/contas", account.criar_conta);
router.put("/contas/:numero_conta/usuario", account.atualizar_usuario_conta);
router.delete("/contas/:numero_conta", account.excluir_conta);

router.get("/contas/saldo", transaction.saldo);
router.get("/contas/extrato", transaction.extrato);

router.post("/transacoes/depositar", transaction.depositar);
router.post("/transacoes/sacar", transaction.sacar);
router.post("/transacoes/transferir", transaction.transferir);


module.exports = router;