let input ="5\n3.56\n17\n-5.1\n36.3\n0.0002\n-2\n5\n5\n-9.01\n-17.7"

const linhas = input.trim().split("\n") 
const n = parseFloat(linhas[0]) 

const coordenada = []
for(let i = 1; i < linhas.length;i=i+2){
        coordenada.push({
            x: parseFloat(linhas[i]),
            y: parseFloat(linhas[i+1])
        })
    }

 let distanciaEntreDoisPontos = 0

for(let i = 0; i < coordenada.length; i++ ){
    for(let j = 0; j < coordenada.length; j++ ){
        let distancia = Math.sqrt(((coordenada[j].x - coordenada[i].x)**2) +((coordenada[j].y - coordenada[i].y)**2))

        if(distancia > distanciaEntreDoisPontos){
            distanciaEntreDoisPontos = distancia
        }
    }
}
console.log(distanciaEntreDoisPontos)