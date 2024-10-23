let num1 = parseInt(prompt('Ingrese un numero'))
let num2 = parseInt(prompt('Ingrese un numero'))
let num3 = parseInt(prompt('Ingrese un numero'))

if (num1 > num2 && num1 > num3) {
    console.log(`El numero mayor es el primero (${num1})`);
}else{
    if (num2 > num1 && num2 > num3) {
        console.log(`El numero mayor es el segundo (${num2})`);
    }else{
        console.log(`El numero mayor es el tercero (${num3})`);
    }
}

if (num1 == num2) {
    console.log(`El primer y segundo numero son iguales (${num1 , num2})`);
}else{
    if (num1 == num3) {
        console.log(`El primer y tercer numero son iguales (${num1 , num3})`);
    }else if (num2 == num3) {
        console.log(`El segundo y tercer numero son iguales (${num2 , num3})`);
    }else{
        console.log('Los tres numeros son diferentes');
        
    }
}


git