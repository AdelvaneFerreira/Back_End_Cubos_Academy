const  imoveis  =  [ 
    { 
        id : 1 , 
        logradouro : "Av. Getúlio Vargas" , 
        numero : 1458 , 
        complemento : "Térreo" , 
        bairro : "Funcionários" , 
        cidade : "Belo Horizonte" , 
        cep : "30112-021" , 
    } , 
    { 
        id : 2 , 
        logradouro : "Av. Paulista" , 
        número : 1009 , 
        complemento: "16º andar" , 
        bairro : "Cerqueira César" , 
        cidade : "São Paulo" , 
        cep : "01310-100" , 
    } , 
]
express = require('express')

const app = express()

app.get('/imoveis', (req, res) =>{
 
 res.send(imoveis)

})

app.get('/imoveis/:id', (req, res) =>{
    const idImovel = imoveis.find((imovel )=> {
        return imovel.id === Number(req.params.id)
    })

    res.send(idImovel)
   
   })
app.listen(8000)