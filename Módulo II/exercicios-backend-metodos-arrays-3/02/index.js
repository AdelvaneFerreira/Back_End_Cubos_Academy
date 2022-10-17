const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife','Rio de Janeiro', 'Belo Horizonte']


const maior = cidades.reduce((acc, item) => item < acc ?  item : acc)

console.log(maior)