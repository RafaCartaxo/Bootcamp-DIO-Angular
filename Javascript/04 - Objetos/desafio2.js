/*Crie uma classe para representar pessoas.
Para cada pessoa, teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José para dizer
o valor do seu IMC*/



class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(peso, altura){
        return this.peso / (this.altura * this.altura);
    }
}

const jose = new Pessoa ('José', 70, 1.75);
console.log('Meu nome é José e meu IMC é: ' + jose.calcularImc(70, 1.75));

const rafael = new Pessoa('Rafael', 83, 1.85);
console.log('Meu nome é Rafael e meu IMC é: ' + rafael.calcularImc(83, 1.85));