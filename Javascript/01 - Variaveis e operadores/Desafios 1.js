/*Faça um programa para calcular o valor gasto de combustível em uma viagem 

Você terá 3 variaveis. Sendo elas:

1- Preço do combustível; = 5.79
2- Gasto médio de combustível do carro por KM; = 14km/l
3- Distância em KM da viagem. = 130Km

Imprima no console o valor que será gasto de combustível para realizar essa viagem.
*/

const consumoCarro = 14;
const distanciaViagem = 130;
const precoCombustivel = 5.79;

qtdLitro = distanciaViagem / consumoCarro;

qtdComb = qtdLitro * precoCombustivel;


console.log(qtdComb)