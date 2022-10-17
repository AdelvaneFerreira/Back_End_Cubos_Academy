const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000/100 //reais

//seu código aqui

if ( aposentada || portadoraDeDoenca){

    console.log("**ISENTA**")

} else if (totalDeRendimentos <= 28559.70){

    console.log("**VAZA LEAO! JA TA DIFICIL SEM VOCE**")

} else {
    console.log("**PEGA LEAO**")
}
     