const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let corretas = []

function corrigirProva(notas){

for(let i=0; i < notas.questoes.length; i++){
  const questoes = notas.questoes[i] 
    if(prova.questoes[i].resposta=== notas.questoes[i].correta){
        corretas.push(questoes)
    }
 }

let acertos = corretas.length
console.log(`O aluno ${prova.aluno} acertou ${acertos} questões  e tirou ${prova.valor / 5 * acertos}.`)
}
corrigirProva(prova)