const cpf = "011.022.033-44";


let resultado = cpf
let resultadoAnterior = ''

function semCaractere(cpf){
    while(resultado !== resultadoAnterior){
        resultadoAnterior = resultado
        resultado = resultado.replace('.','')
        resultado = resultado.replace('-','')
    }
    console.log(resultado)
}
semCaractere(cpf)