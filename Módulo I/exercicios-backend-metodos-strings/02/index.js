const cpf = "12345678900";
const cnpj = "12345678900";

let digitos = cpf.length

if(digitos != 11){
    console.log('CPF Inválido')
} else{
    console.log('CPF válido')
}

let digitosCNPJ = cnpj.length

if(digitosCNPJ != 14){
    console.log('CNPJ Inválido')
} else{
    console.log('CNPJ válido')
}