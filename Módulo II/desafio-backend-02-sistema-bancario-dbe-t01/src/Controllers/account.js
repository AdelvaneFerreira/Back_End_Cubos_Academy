const banco_de_dados = require('../Database/data');

async function criar_conta(req, res) {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    const { contas } = banco_de_dados;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
    }

    const conta_existe = contas.find(conta => {
        return conta.usuario.cpf === cpf || conta.usuario.email === email;
    });

    if (conta_existe) {
        return res.status(400).json({ mensagem: 'Já possui uma conta com o cpf ou e-mail informado!' });
    }

    const nova_conta = {
        numero: (banco_de_dados.Id++).toString(),
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    }

    contas.push(nova_conta);

    return res.status(201).send();





}

async function listar_contas(req, res) {
    const { senha_banco } = req.query;
    const { contas, banco } = banco_de_dados;

    if (!senha_banco) {
        return res.status(400).json({ mensagem: 'A senha do banco é obrigatória!' });
    }

    if (senha_banco !== banco.senha) {
        return res.status(400).json({ mensagem: 'A senha do banco é inválida!' });
    }

    return res.json({contas});
}






async function atualizar_usuario_conta(req, res) {
    const { numero_conta } = req.params;
    const { contas } = banco_de_dados;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
    }

    const conta_existente = contas.find(conta => {
        return conta.numero === numero_conta;
    });

    if (!conta_existente) {
        return res.status(404).json({ mensagem: 'Conta inexistente!' });
    }

    if (cpf !== conta_existente.usuario.cpf) {
        const existe_cpf = contas.find(conta => {
            return conta.usuario.cpf === cpf
        });

        if (existe_cpf) {
            return res.status(400).json({ mensagem: 'já existe um cpf igual ao informado!' });
        }
    }

    if (email !== conta_existente.usuario.email) {
        const existe_email = contas.find(conta => {
            return conta.usuario.email === email
        });

        if (existe_email) {
            return res.status(400).json({ mensagem: 'já existe um email igual ao informado!' });
        }
    }

    conta_existente.usuario = { nome, cpf, data_nascimento, telefone, email, senha };

    return res.status(204).send();
}

async function excluir_conta(req, res) {
    const { numero_conta } = req.params;
    const { contas } = banco_de_dados;

    const conta_existente = contas.find(conta => {
        return conta.numero === numero_conta;
    });

    if (!conta_existente) {
        return res.status(404).json({ mensagem: 'Conta inexistente!' });
    }

    if (conta_existente.saldo > 0) {
        return res.status(403).json({ mensagem: 'não é possível excluir uma conta com saldo maior que zero!' });
    }

    banco_de_dados.contas = contas.filter(conta => {
        return conta.numero !== numero_conta
    });

    return res.status(204).send();
}

module.exports = {
    criar_conta,
    listar_contas,
    atualizar_usuario_conta,
    excluir_conta
}
