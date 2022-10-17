function solucao(stringCorrompida) {
	// seu codigo aqui
    let dadoPuro = ""

for(let caractere of stringCorrompida){
    if(caractere === "!" || caractere === "@" || caractere === "#" || caractere === "$" ||caractere === "%" ||caractere === "&" ||caractere === "*"||caractere === "(" ||caractere === ")"|| caractere === "."){
} else {
    dadoPuro += caractere
    }
}
console.log(dadoPuro)
}