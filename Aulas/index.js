// const {getCityFromZipcode, getStateFromZipcode} = require('utils-playground')

// //Retorna a cidade se o código for válido, senão for válido retorna um erro
// getCityFromZipcode('29830000').then(city => {
//     console.log(city)})
    


// //Retorna o estado se o código for válido, senão for válido retorna um erro
//     getStateFromZipcode('29830000').then(UF => {
//         console.log(UF)})

const express = require('express');
const {getPackageDescriptionNpm} = require('utils-playground');

const app = express();

app.get('/pacote/:nomeDoPacote', async  (req, res) => {
    const {nomeDoPacote} = req.params;
    const description = await getPackageDescriptionNpm(nomeDoPacote);
return res.send(description);
})

app.listen(3000)