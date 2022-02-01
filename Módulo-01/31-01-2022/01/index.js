let peso = 60
let altura = 1.59

const imc = (peso /Math.pow(altura, 2)).toFixed(2)

    if ( imc  <= 18.5){
     console.log('com peso  muito baixo. Procure orientação médica!')

   }  else if ( imc > 18.5 && imc <= 24.99){
    console.log('com o peso normal. Continue assim!')

   } else if ( imc > 25 && imc <= 29.99){
    console.log('com o peso acima do normal!')

   }  else if ( imc > 30 && imc <= 34.99){
    console.log('  com obesidade Grau I.')

   } else if ( imc > 35 && imc <= 39.99){
    console.log(' com obesidade Grau II.')

   } else { 
   console.log('com obesidade Grau III. Procure orientação médica!')
   }

