//Taxa de juros

/*i = taxa de juros
M = montante 90000
C = capital 60000
n = numero de periodos 24*/
 
let taxa = 0
let montante = 90000
let capital = 60000
let periodo = 24
 taxa = Math.pow(90000/60000,1/24) - 1

  console.log("O seu financiamento de R$60.000,00 reais teve uma taxa de juros de " + (taxa*100).toFixed(2) +"%, pois após 24 meses você teve que pagar R$90.000,00 reais."  )
