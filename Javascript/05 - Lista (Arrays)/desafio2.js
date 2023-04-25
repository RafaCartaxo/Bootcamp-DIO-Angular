//Crie um programa que seja capaz de percorrer uma lista de número e imprima cada número Par encontrado.



const numeros = [7, 20, 30, 50, 55, 68]

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero % 2 === 0) {
        console.log(numero)
    }
}
    

