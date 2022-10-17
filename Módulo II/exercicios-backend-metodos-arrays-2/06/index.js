const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const capitaisFiltradas = cidades.filter(x => x.length <= 8)
      
console.log(capitaisFiltradas)