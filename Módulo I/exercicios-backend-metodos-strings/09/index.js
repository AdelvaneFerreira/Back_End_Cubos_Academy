const nome = 'Guido Cerqueira'

function nickName(nome){
    let nickname = nome.slice(0,13).replace(' ', "").toLowerCase().padStart(13,"@")
    console.log(nickname)
}
nickName(nome)