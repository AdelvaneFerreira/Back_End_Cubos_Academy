//Delta (Baskara)

/* D = b² - 4*a*c  */

let D = 0

let a = 5
let b = 9
let c = 125

    D = (b*b -(4 * a * c))

    if ( D > 0) {
        console.log('O valor de Delta é ' + D)
    } else {
        console.log('O valor de Delta é negativo portanto não existe. Solução vazia.') 
    }
