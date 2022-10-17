const data_base = require('../Database/data');
const { format } = require('date-fns');

async function depositar(req, res) {
    const { numero_conta, valor } = req.body;
    const { contas, depositos } = data_base;


    if (!numero_conta || !valor) {
        return res.status(400).json({ mensagem: 'O número da conta e o valor são obrigatórios!' });
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'Só é permitido valores maior que zero!' });
    }

    const conta_existente = contas.find(conta => {
        return conta.numero === numero_conta;
    });

    if (!conta_existente) {
        return res.status(404).json({ mensagem: 'Conta inexistente!' });
    }

    conta_existente.saldo += valor;

    depositos.push({
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta: numero_conta,
        valor: valor
    });

    return res.status(201).send();
}

async function sacar(req, res) {
    const { numero_conta, valor, senha } = req.body;
    const { contas, saques } = data_base;

    if (!numero_conta || !valor || !senha) {
        return res.status(400).json({ mensagem: 'O número da conta, a senha e o valor são obrigatórios!' });
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'Só é permitido valores maior que zero!' });
    }

    const conta_existente = contas.find(conta => {
        return conta.numero === numero_conta;
    });

    if (!conta_existente) {
        return res.status(404).json({ mensagem: 'Conta inexistente!' });
    }

    if (conta_existente.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'senha inválida' });
    }

    if (conta_existente.saldo < valor) {
        return res.status(403).json({ mensagem: 'saldo insuficiente' });
    }

    conta_existente.saldo -= valor;

    saques.push({
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta: numero_conta,
        valor: valor
    });

    return res.status(201).send();
}

async function transferir(req, res) {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;
    const { contas, transferencias } = data_base;

    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
        return res.status(400).json({ mensagem: 'O número da conta de origem, de destino, a senha e o valor são obrigatórios!' });
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'Só é permitido valores maior que zero!' });
    }

    const conta_existente_origem = contas.find(conta => {
        return conta.numero === numero_conta_origem;
    });

    if (!conta_existente_origem) {
        return res.status(404).json({ mensagem: 'Conta de origem inexistente!' });
    }

    const conta_existente_destino = contas.find(conta => {
        return conta.numero === numero_conta_destino;
    });

    if (!conta_existente_destino) {
        return res.status(404).json({ mensagem: 'Conta de destino inexistente!' });
    }

    if (conta_existente_origem.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'senha inválida' });
    }

    if (conta_existente_origem.saldo < valor) {
        return res.status(403).json({ mensagem: 'saldo insuficiente' });
    }

    conta_existente_origem.saldo -= valor;
    conta_existente_destino.saldo += valor;

    transferencias.push({
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta_origem,
        numero_conta_destino,
        valor: valor
    });

    return res.status(201).send();
}

async function saldo(req, res) {
    const { numero_conta, senha } = req.query
    const { contas } = data_base;

    if (!numero_conta || !senha) {
        return res.status(400).json({ mensagem: 'o numero da conta e a senha são obrigatórios!' });
    }

    const conta_existente = contas.find(conta => {
        return conta.numero === numero_conta;
    });

    if (!conta_existente) {
        return res.status(404).json({ mensagem: 'Conta inexistente!' });
    }

    if (conta_existente.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'senha inválida' });
    }

    return res.json({ saldo: conta_existente.saldo });
}

async function extrato(req, res) {
    const { numero_conta, senha } = req.query
    const { contas } = data_base;

    if (!numero_conta || !senha) {
        return res.status(400).json({ mensagem: 'o numero da conta e a senha são obrigatórios!' });
    }

    const conta_existente = contas.find(conta => {
        return conta.numero === numero_conta;
    });

    if (!conta_existente) {
        return res.status(404).json({ mensagem: 'Conta inexistente!' });
    }

    if (conta_existente.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'senha inválida' });
    }

    const depositos = data_base.depositos.filter(deposito => {
        return deposito.numero_conta === numero_conta;
    });

    const saques = data_base.saques.filter(saque => {
        return saque.numero_conta === numero_conta;
    });

    const transferencias_enviadas = data_base.transferencias.filter(transferencia => {
        return transferencia.numero_conta_origem === numero_conta;
    });

    const transferencias_recebidas = data_base.transferencias.filter(transferencia => {
        return transferencia.numero_conta_destino === numero_conta;
    });

    return res.json({ depositos, saques, transferencias_enviadas, transferencias_recebidas});
}

module.exports = {
    depositar,
    sacar,
    transferir,
    saldo,
    extrato
}
