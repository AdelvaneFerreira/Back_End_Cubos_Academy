const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

let newArr = frutas.map((x, i) => {
    console.log(`${i}- ${x.toLowerCase()}.`)
}) 

console.log(newArr.toString())