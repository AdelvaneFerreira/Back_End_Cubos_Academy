const conexao = require('../conexao');

const listarAutores = async (req, res) =>{
    // const autores = await conexao.query('SELECT * FROM autores');
    // res.json(autores);
    try{
        const {rows: autores} = await conexao.query('SELECT * FROM autores');
        return res.status(200).json(autores);
    } catch{
        return res.status(400).json({error: 'Erro ao listar autores'});
    }
}
    const obterAutor = async (req, res) => {
        const {id} = req.params;
        try{
            const autor = await conexao.query('SELECT * FROM autores where id = $1', [id]);

            if(autor.rowCount === 0){
                return res.status(404).json('Autor não encontrado');
            }
            return res.status(200).json(autor.rows);
        } catch {
            return res.status(400).json({error: 'Erro ao listar autores'});
        }
       }

        const cadastrarAutor = async (req, res) => {
            const {nome, idade} = req.body;

            if(!nome){
                return res.status(400).json({error: 'Nome é obrigatório'});
            }
            try{
                const autor = await conexao.query('insert into autores (nome, idade) values ($1, $2)', [nome, idade]);

                if(autor.rowCount === 0){
                    return res.status(404).json('Não foi possível cadastrar o autor');
                }
                res.status(200).json('Autor cadastrado com sucesso.');
            } catch (error){
                return res.status(400).json({error: 'Erro ao cadastrar autor.'});
            }
        }
        const atualizarAutor = async (req, res) => {
        
            const {id} = req.params;
            const {nome, idade} = req.body;
           
        try{
            const autor = await conexao.query('SELECT * FROM autores where id = $1', [id]);

            if(autor.rowCount === 0){
                return res.status(404).json('Autor não encontrado');
        }

        if(!nome){
            return res.status(400).json('O nome é obrigatório');
    }

     const autorAtualizado = await conexao.query('UPDATE autores SET nome = $1, idade = $2 WHERE id = $3', [nome, idade, id]);

     if(autorAtualizado.rowCount === 0){
        return res.status(404).json('Não foi possível atualizar o autor');
}
        return res.status(200).json('Autor atualizado com sucesso.');
        } catch (error) {
            return res.status(400).json(error.message);
        }
            }

            const excluirAutor = async (req, res) => {
          
                const {id} = req.params;
          
        try{
            const autor = await conexao.query('SELECT * FROM autores where id = $1', [id]);

            if(autor.rowCount === 0){
                return res.status(404).json('Autor não encontrado');
        }
    
     const autorExcluido = await conexao.query('DELETE FROM autores WHERE id = $1', [id]);

     if(autorExcluido.rowCount === 0){
        return res.status(404).json('Não foi possível excluir  o autor');
}
        return res.status(200).json('Autor excluído com sucesso.');
        } catch (error) {
            return res.status(400).json(error.message);
        }
               }

                module.exports = {listarAutores, obterAutor, cadastrarAutor, atualizarAutor, excluirAutor}