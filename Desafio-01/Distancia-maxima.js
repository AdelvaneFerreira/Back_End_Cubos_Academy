// let x1 = 0
// let x2 = 4
// let y1 = 3
// let y2 = 0

//Fórmula: Raiz quadrada (x2 - x1)^2  + (y2 - y1)^2
// let distancia = (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) ))
// console.log(distancia)
//For dentro de for pra olhar x1 e x2, respectivamente
//Criar uma variavel pra salvar a informação.
//Verificar a maior distancia (maior ou menor)

//Código da aula do Junior
let input = "3\n0\n0\n0\n3\n4\n0"
const linhas = input.trim().split("\n")
const n = parseInt(linhas[0])
console.log(linhas)




// const coordenadas = []
// for(let i = 1; i < linhas.length; i++){
//     const coord = linhas[i].split(" ")
//     coordenadas.push(/*{
//         x: parseFloat(coord[0]), 
//         y: parseFloat(coord[1]), 
//     }*/)
// }

// //Código de Adelvane
// let coordx = []
// let coordy = []
// for(let i = 0; i <  input.length; i++){
//   coordx.push(i)
//     }
    
//     for(let j = 1; j <  input.length; j++){
//         coordy.push(j)
//     }
      
//     console.log(coordx, coordy)



////////////////////////////////////
// let input = "3\n0\n0\n0\n3\n4\n0"
// const coord = input.trim().split("\n")
// const n = parseInt(coord[0])
// console.log(coord)
// console.log(n)


let coord = [{x: 3.56, y: 17 },  {x: -5.1 , y: 36.3 }, {x: 0.0002,  y: -2 }, {x: 5 , y: 5 }, {x: -9.01 , y: -17.7}]

let distanciaEntreDoisPontos = 0



for(let i = 0; i < coord.length; i++ ){
    for(let j = 0; j < coord.length; j++ ){
        let distancia = Math.sqrt(((coord[j].x - coord[i].x)**2) +((coord[j].y - coord[i].y)**2))

        if(distancia > distanciaEntreDoisPontos){
            distanciaEntreDoisPontos = distancia
        }
    }
}

console.log(distanciaEntreDoisPontos)