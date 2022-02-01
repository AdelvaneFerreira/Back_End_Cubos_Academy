//Área total de um cilindro

/*Area total = 2 pi R(R+H)
Faça um programa que calcula a área total de
 um cilindro a partir do raio da sua base e da sua altura.*/

 let areaTotal = 0
 let raio = 3
 let altura = 6
   areaTotal = (2 * Math.PI * raio * (raio + altura)).toFixed(2)

    console.log("A área total do cilindro é " + areaTotal +"m².")