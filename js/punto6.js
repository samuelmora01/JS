let numero = prompt("dime un numero")

if(Number.isInteger(parseFloat(numero))) {
    let kelvin = parseFloat(numero) + 273
    console.log("los grados en kelvin son " + kelvin)
}

if(Number.isInteger(parseFloat(numero))) {
   if(parseFloat(numero)> 10.5){
    console.log("es mayor a 10.5")
   }
}else {
    console.log(`en vez de numero ingresaste un caracter el cual es: ${numero}`)
}

