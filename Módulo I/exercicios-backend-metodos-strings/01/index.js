const comentario = "Esse COVID é muito perigoso!";

let palavra = comentario.includes("COVID")

if(palavra === true){
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário autorizado")
} 