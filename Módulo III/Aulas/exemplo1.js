const express = require('express');
const {getPackageDescriptionNpm} = require('utils-playground');

const app = express();

app.get('/pacote', (req, res) => {
res.send("Até aqui tudo bem");
})

app.listen(3000)