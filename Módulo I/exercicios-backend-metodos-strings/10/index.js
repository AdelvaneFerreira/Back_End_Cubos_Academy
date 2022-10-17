const nomeArquivo = 'Foto da Familia.jpg';

function extensaoDoArquivo(arquivo){
    let extensao = arquivo.slice(arquivo.length-3)
    
    if( extensao == 'jpg' || extensao == 'jpeg' || extensao == 'gif' || extensao == 'png' ){
        console.log("Arquivo válido")
    } else {
        console.log("Arquivo inválido")
    }
}

extensaoDoArquivo(nomeArquivo)