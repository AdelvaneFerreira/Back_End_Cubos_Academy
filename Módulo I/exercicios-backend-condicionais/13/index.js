//tipo de pagamento (dinheiro, credito, debito, cheque). DÚVIDAS
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000/100;

let aVista = 0
let credito = 1
let cheque = 2

if (1){
    let valorDesconto= (valorDoProduto * 0.05)
      console.log(`O valor a ser pago é: R$${valorDoProduto - valorDesconto}`)
} else if (0){
    let valorDesconto1= (valorDoProduto * 0.1)
      console.log(`O valor a ser pago é: R$${valorDoProduto - valorDesconto1}`)
} else if (2){
    let valorDesconto2= (valorDoProduto * 0.03)
      console.log(`O valor a ser pago é: R$${valorDoProduto - valorDesconto2}`)
}