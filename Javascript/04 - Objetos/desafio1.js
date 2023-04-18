class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.cor = cor;
        this.marca = marca;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaViagem, precoCombustivel){
        return distanciaViagem * this.gastoMedioPorKm * precoCombustivel;
    }

}

const argo = new Carro('Fiat', 'Preto', 1/12);
console.log(argo.calcularGastoDePercurso(70, 5));

const uno = new Carro('Fiat', 'Prata', 1/10);
console.log(uno.calcularGastoDePercurso(80, 5))
