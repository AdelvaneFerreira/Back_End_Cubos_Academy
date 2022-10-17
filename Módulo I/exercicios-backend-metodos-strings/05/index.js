const numeroCartao = '1111222233334444';

// const numCartao = numeroCartao.slice( 4, 12)
// //console.log(numCartao)


const last4Digits = numeroCartao.slice(-4);

const final = last4Digits.padStart(numeroCartao.length, "*")
console.log(final)

//Retornar