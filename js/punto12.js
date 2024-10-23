let comisionTotal = 0;
for (let i = 0; i < 5; i++) {
    let valorVenta = parseInt(prompt('Cual fue el valor de la venta?'))

    if (valorVenta < 2000 ) {
        comisionTotal += (valorVenta * 0.03)
    }else{
        comisionTotal += (valorVenta * 0.05)
    }
}

console.log(`La comision total del vendedor es de: ${comisionTotal}`);

let ventasMenor2k = 0;
let ventas3k = 0;

for (let i = 0; i < 50; i++) {
    let valorVenta = i + 1000;

    if (valorVenta < 2000) {
        ventasMenor2k++;
    } else if (valorVenta >= 3000) {
        ventas3k++;
    }
}

console.log("Ventas menores a 2000:", ventasMenor2k);
console.log("Ventas mayores o iguales a 3000:", ventas3k);