let valorDeE = 0;

function factorial(numero_factorial) {
    if (numero_factorial <= 1) {
        return 1;
    } else {
        return numero_factorial * factorial(numero_factorial - 1);
    }
}

function e_value() {
    for (let i = 0; i <= 20; i++) {
        valorDeE += 1 / factorial(i);
    }
}

e_value();
console.log(valorDeE);
