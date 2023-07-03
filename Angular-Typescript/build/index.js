"use strict";
//Objects e variáveis
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let produto = {
    name: "Rafael",
    cidade: "João Pessoa",
    idade: 23,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 2,
};
//Arrays
let dados = ["Borges", "Rafael", "Gabrielle"];
let dados2 = ["Borges", "Rafael", "Gabrielle",];
//Arrays multi types
let infos = ["Borges", "Rafael", "Gabrielle", 1, 2, 3, 4, 5];
//Tuplas
let boleto = ["agua conta", 199.89, 180811833];
dados.pop();
//Datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
//Funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
function callToPhone(phone) {
    return phone;
}
let soma = addNumber(4, 7);
console.log(soma);
console.log(addToHello("Rafael"));
console.log(callToPhone("8888-8888"));
//Funções assíncronas - async
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Rafael";
    });
}
const bot1 = {
    id: 1,
    name: "Megaman",
};
const bot2 = {
    id: 1,
    name: "Megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello! I'am ${this.name}.`;
    }
}
const p = new Pessoa(1, "Gustman");
console.log(p.sayHello());
//classes
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
const p1 = new Character("Ryu", 2, 50);
p1.attack;
