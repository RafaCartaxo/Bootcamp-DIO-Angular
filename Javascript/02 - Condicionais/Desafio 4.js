/*Definir valores de acordo com formas de pagamento

1 - À vista débito, 10% desconto
2 - À vista dinheiro ou PIX, 15% desconto
3 - Em duas vezes, preço de etiqueta sem juros
4 - Acima de duas vezes, preço de etiqueta + 10% de juros*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}   else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
}else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
