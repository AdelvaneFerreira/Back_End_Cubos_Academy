const express = require('express');
const app = express();
const rotas = require('./rotas');
app.use(express.json());
app.use(rotas);

app.get('/', (req, res) => {
    res.json('Tudo certo!');

 });


app.listen(3300, () => {
    console.log('Servidor rodando na porta 3300');
});