//Cálculo de juros compostos
//Fórmula M = C. (1-i)^n, sendo M o montante, C o capital inicial, i a taxa de juros e n o tempo.


let montante = 0

let capital = 1500

let taxa = 12.5/100

let tempo = 6

   montante = capital * Math.pow(1 + taxa, tempo)

       console.log(montante)