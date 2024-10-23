let longitud = parseFloat(prompt('Ingrese la longitud de la pieza'));
let diametro = parseFloat(prompt('Ingrese el diametro de la pieza'));
let densidad = 3.5;
let masa;

if (longitud < 7.5 || longitud > 9 || diametro < 0.5 || diametro > 1.3) {
    console.log('Pieza rechazada');
} else {
    masa = diametro * longitud / densidad
    if (masa > 5.8) {
        console.log('Pieza rechazada.');
    }else{
        console.log('Pieza aceptada');
        
    }
}
