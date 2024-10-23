let num1 = parseInt(prompt('Ingrese un numero'));
let num2 = parseInt(prompt('Ingrese un numero'));
let num3 = parseInt(prompt('Ingrese un numero'));

if (num1 > num2 && num1 < num3) {
    console.log(`El numero del medio es el: ${num1}`);
} else if (num2 > num1 && num2 < num3) {
    console.log(`El numero del medio es el ${num2}`);
} else if(num3 > num1 && num3 < num2) {
    console.log(`El numero del medio es el ${num3}`);
}
