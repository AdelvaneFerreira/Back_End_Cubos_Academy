const conexao = require('../conexao');

const listarLivros = async (req, res) =>{    
    try{
        const query = `select l.id, a.nome as nome_autor,  l.nome, l.genero, l.editora, l.data_publicacao from livros l left  join autores a on l.autor_id = a.id`;	
        const {rows: livros} = await conexao.query(query);

        return res.status(200).json(livros);
    } catch{
        return res.status(400).json({error: 'Erro ao listar livros'});
    }

}
const obterLivro = async (req, res) => {    
    const {id} = req.params;
        try{
            const livro = await conexao.query('SELECT * FROM livros where id = $1', [id]);

            if(livro.rowCount === 0){
                return res.status(404).json('Livro não encontrado');
            }
            return res.status(200).json(livro.rows[0]);
        } catch {
            return res.status(400).json({error: 'Erro ao listar livros'});
        }
}
const cadastrarLivro = async (req, res) => {   
    const {autor_id, nome, genero, editora, data_publicacao} = req.body;
try {
    const livroCadastrado = await conexao.query('INSERT INTO livros (autor_id, nome, genero, editora, data_publicacao) VALUES ($1, $2, $3, $4, $5)', [autor_id, nome, genero, editora, data_publicacao]);

    if(livroCadastrado.rowCount === 0){
        return res.status(400).json({error: 'Erro ao cadastrar livro'});
    }

    // if(livroCadastrado.rowCount === 1){
    //     return res.status(400).json({ 'Livro já foi cadastrado anteriormente'});
    // }
    return res.status(201).json('Livro cadastrado com sucesso');
} catch (error) {
    return res.status(400).json({error: 'Erro ao cadastrar  livros'});
}
   
}
const atualizarLivro = async (req, res) => {    
    const {id} = req.params;
    const {autor_id, nome, genero, editora, data_publicacao} = req.body;

        try{
            const livro = await conexao.query('SELECT * FROM livros where id = $1', [id]);

            if(livro.rowCount === 0){
                return res.status(404).json('Livro não encontrado');
            }

            const livroAtualizado = await conexao.query('UPDATE livros SET autor_id = $1, nome = $2, genero = $3, editora = $4, data_publicacao = $5 WHERE id = $6', [autor_id, nome, genero, editora, data_publicacao, id]);

            if(livroAtualizado.rowCount === 0){
                return res.status(400).json({error: 'Erro ao atualizar livro'});
            }
            return res.status(200).json('Livro atualizado com sucesso');
        } catch {
            return res.status(400).json({error: 'Erro ao atualizar livros'});
        }
}
const excluirLivro = async (req, res) => {    
    const {id} = req.params;
    try{
        const livro = await conexao.query('SELECT * FROM livros where id = $1', [id]);

        if(livro.rowCount === 0){
            return res.status(404).json('Livro não encontrado');
        }
        const livroExcluido = await conexao.query('DELETE FROM livros WHERE id = $1', [id]);

        if(livroExcluido.rowCount === 0){
            return res.status(400).json({error: 'Erro ao excluir livro'});
        }
        return res.status(200).json('Livro excluido com sucesso');
    } catch {
        return res.status(400).json({error: 'Erro ao excluir livro.'});
    }
}

module.exports = {listarLivros, obterLivro, cadastrarLivro, atualizarLivro, excluirLivro}