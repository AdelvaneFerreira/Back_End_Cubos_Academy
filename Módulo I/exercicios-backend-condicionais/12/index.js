const diaDaSemana = 3;

const resto = diaDaSemana % 7 

if (diaDaSemana <= 7){

if (resto == 0) {

  console.log(" Domingo")

} else if (resto == 1) {

  console.log(" Segunda-feira")

} else if (resto == 2) {

  console.log(" Terça-feira")

} else if (resto == 3) {

  console.log(" Quarta-feira")

} else if (resto == 4) {

  console.log(" Quinta-feira")

} else if (resto == 5) {

  console.log(" Sexta-feira")

}  else if (resto == 6) {

  console.log(" Sábado")
  }

} else {
    console.log("O dia da semana informado não é válido.")
}