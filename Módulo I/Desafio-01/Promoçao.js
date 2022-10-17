const valores = [1000 ,2000, 3000, 3500, 4500, 5500]

function promocao(valores){
  
let soma = 0
let menor = valores[0]

for(let item of valores){
  soma += item

  if(item < menor){
    menor = item
  }
}

if(valores.length < 3){
  console.log(soma)
 } else {
   const desconto = menor / 2
   console.log(soma - desconto)
 }

}
promocao(valores)