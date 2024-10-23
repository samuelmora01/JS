let nota1 = parseFloat(prompt('Ingrese la nota'));
let nota2 = parseFloat(prompt('Ingrese la nota'));
let nota3 = parseFloat(prompt('Ingrese la nota'));

let promedio;

if (nota1 > nota3 && nota2 > nota3) {
    promedio = (nota1 + nota2) / 2;
    console.log(`El promedio de las notas ${nota1} y ${nota2} es: ${promedio}`);
} else {
    if (nota2 > nota1 && nota3 > nota1) {
        promedio = (nota2 + nota3) / 2;
        console.log(`El promedio de las notas ${nota2} y ${nota3} es: ${promedio}`);
    } else if (nota3 > nota2 && nota1 > nota2) {
        promedio = (nota3 + nota1) / 2;
        console.log(`El promedio de las notas ${nota3} y ${nota1} es: ${promedio}`);
    }
}
