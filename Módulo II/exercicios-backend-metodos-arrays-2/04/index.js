const numeros = [0, 122, 5, 4, 6, 8, 44];
const par = numeros.every(x => x % 2 == 0)

if(par){
  console.log('array válido')
} else {
  console.log('array inválido')
}