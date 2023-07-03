//Objects e variáveis

let produto: object = {
    name: "Rafael",
    cidade: "João Pessoa",
    idade: 23,
}

//Objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 2,
};



//Arrays

let dados: string [] = ["Borges", "Rafael", "Gabrielle"];
let dados2: Array<string> = ["Borges", "Rafael", "Gabrielle",];

//Arrays multi types

let infos: (string | number)[] = ["Borges", "Rafael", "Gabrielle", 1, 2, 3, 4, 5];

//Tuplas

let boleto:[string, number, number] = ["agua conta", 199.89, 180811833];

dados.pop();

//Datas

let aniversario:Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString())

//Funções

function addNumber (x: number, y: number): number {
return x + y;
}

function addToHello(name: string){
    return `Hello ${name}`;
}

function callToPhone(phone: number | string): number | string {
    return phone;
}

let soma: number = addNumber(4, 7);

console.log(soma);
console.log(addToHello("Rafael"));
console.log(callToPhone("8888-8888"));

//Funções assíncronas - async

async function getDatabase(id: number): Promise<string>{
    return "Rafael";
}


//Interfaces

type robot1 = {
    id: number | string;
    name: string;
};

interface robot2{
    readonly id: number | string;
    name: string;
    sayHello(): string;
}


const bot1: robot1 = {
    id: 1,
    name: "Megaman",
}

const bot2: robot2 = {
    id: 1,
    name: "Megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}


class Pessoa implements robot2{
    id: string | number;
    name: string;

constructor(id: string | number, name: string){
    this.id = id;
    this.name = name;
}
    sayHello(): string {
        return `Hello! I'am ${this.name}.`;
    }
}

const p = new Pessoa(1, "Gustman")
console.log(p.sayHello())

//classes
class Character {
    name?: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number){
    this.name = name;
    this.strength = strength;
    this.skill = skill;
    }

    attack() : void {
        console.log(`Attack with ${this.strength} points`);
    }
}


//Subclass
class Magician extends Character{
    magicPoints: number

    constructor(name: string, 
        strength: number, 
        skill: number, 
        magicPoints: number){
            super(name, strength, skill)
            this.magicPoints = magicPoints;        
    }
}

const p1 = new Character("Ryu", 20, 50);
const p2 = new Magician("Atena", 1, 55, 90);
console.log(p1);
console.log(p2);


//generic
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["Rafael", "Felipe", "João"]);

console.log(numArray);
console.log(stgArray);