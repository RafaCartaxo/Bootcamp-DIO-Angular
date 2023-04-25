const entradas = [5, 50 ,10 ,92 ,23, 97, 52, 32, 29];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}


module.exports = { gets, print };

