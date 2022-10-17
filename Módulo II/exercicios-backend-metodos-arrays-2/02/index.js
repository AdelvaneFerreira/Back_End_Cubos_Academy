const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const caracteres = palavras.some((x) => x.length > 5)

const resultado = caracteres ? console.log('existe palavra inválida' ) : console.log('array validado')