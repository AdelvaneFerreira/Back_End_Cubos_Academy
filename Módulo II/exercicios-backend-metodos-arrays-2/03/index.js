const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const bebidas = palavras.some((x) => {
  if ( x = 'cerveja'){
    console.log( 'revise sua lista, joão. possui bebida com venda proibida!')
  }  else {
    console.log('tudo certo')
  }
})