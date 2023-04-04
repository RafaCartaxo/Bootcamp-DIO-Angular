/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1- Preço do etanol;  2,89
    2- Preço da gasolina; 5,78
    3- O tipo de combustível que está no seu carro; Gasolina
    4- Gasto médio de combustível do carro por KM; 12l/km
    5- Distância em KM da viagem; 120km

    Imprima no console o valor que será gasto para realizar esta viagem. */

const consumoKmCarro = 10;
const distanciaViagem = 100;
const precoGasolina = 5.79;
const precoEtanol = 3.51;
const tipoCombustivel = 'Gasolina';

const qtdLitroConsumidos = distanciaViagem / consumoKmCarro;

if (tipoCombustivel === 'Etanol') {

    const qtdDinheiroGasto = precoEtanol * qtdLitroConsumidos;
    console.log(qtdDinheiroGasto);

} else {
    
    const qtdDinheiroGasto = precoGasolina * qtdLitroConsumidos;
    console.log(qtdDinheiroGasto);
}










