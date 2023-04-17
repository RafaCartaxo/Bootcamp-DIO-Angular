class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }
    
   descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e eu nasci em ${this.anoDeNascimento}`);  
    }
}
    
const rafael = new Pessoa('Rafael', 23);


const renan = new Pessoa('Renan', 30);


rafael.descrever();
renan.descrever();