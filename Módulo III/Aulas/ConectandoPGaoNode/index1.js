const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Tudo Certo!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});