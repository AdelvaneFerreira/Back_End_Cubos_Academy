const express = require('express');
const rotas = require('./router');
const cors = require('cors');

const app = express();


app.use(express.json({limit:'15mb'}));
app.use(cors());
app.use(rotas);

app.listen(3300);