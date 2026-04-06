
/*
verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false
*/

// Regra de negocio 1
function verificarNumeroPrimo(numero) {
    if (numero < 2) {
        return false;
    }
}

// Regra de negocio 2
for (let i = 2 ; i < numero; i++) {
    if (numero % i ===0 ) { //se a divisão for exata, não é primo.
        return false;
    }
}
// se ninguém dividiu 'numero', ele é primo.
return true;
