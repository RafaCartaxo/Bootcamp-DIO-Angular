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

    classificarImc(){
    const imc = this.calcularImc();
   
    if (imc < 18.5) {
        return ('Abaixo do peso.');
    
    } else if (imc >= 18.5 && imc <= 25) {
        return ('Peso normal.')
        
    } else if (imc >= 25 && imc <= 30){
        return ('Acima do peso.');
    
    } else if (imc >= 30 && imc <= 40){
        return ('Obeso.');
    
    } else {
        return ('Obesidade grave');
    }

    }
}

const jose = new Pessoa ('José', 70, 1.75);
console.log('Meu nome é José e meu IMC é: ' + jose.classificarImc(70, 1.75));

const rafael = new Pessoa('Rafael', 83, 1.85);
console.log('Meu nome é Rafael e meu IMC é: ' + rafael.classificarImc(83, 1.85));

const gabrielle = new Pessoa('Gabrielle', 50, 1.69);
console.log('Meu nome é Gabrielle e meu IMC é: ' + gabrielle.classificarImc(57, 1.69));

