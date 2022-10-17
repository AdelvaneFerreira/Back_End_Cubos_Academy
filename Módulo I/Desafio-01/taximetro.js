//50 centavos por minuto de viagem e mais 70 centavos por cada quilômtro de viagem realizado.
//Caso a viagem tenha mais de 10km, cada km adicional (acima de 10) fica mais barato, passando a custar apenas 50 centavos por km.
// Caso a viagem dure mais de 20min, cada min adicional (acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto.
//tempo primeiro// separar 
let km = 12
let min = 25
let precoMinuto = 0
let precoKm = 0


if(min < 20){
    precoMinuto = ( 50 * min) 
} else {
    precoMinuto = 20 * 50 +(min - 20) * 30
}

if(km < 10){
    precoKm = 70 * km
} else{
    precoKm = 10 * 70 + (km - 10) * 50
}
console.log(precoMinuto + precoKm)
