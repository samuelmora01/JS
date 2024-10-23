let a = parseInt(prompt('Ingrese un numero'));
let b = parseInt(prompt('Ingrese un numero'));
let c = parseInt(prompt('Ingrese un numero'));

let mayor;
let medio;
let menor;

if (a > b && a > c && b > c) {
    mayor = a;
    medio = b;
    menor = c;
    console.log(mayor, medio, menor);
} else {
    if (b > a && b > c && a > c) {
        mayor = b;
        medio = a;
        menor = c;
        console.log(mayor, medio, menor);
    } else {
        mayor = c;
        medio = b;
        menor = a;
        console.log(mayor, medio, menor);
    }
}

