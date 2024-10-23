let num1 = parseInt(prompt("dime un numero")) 
let num2 = parseInt(prompt("dime otro numero")) 
let num3 = parseInt(prompt("dime el ultimo numero")) 

if( num1 % num2 == 0){
    console.log(`${num2} es divisor de ${num1}`);
    if(num1 % 3 == 0){
        console.log(`${num3} es divisor de ${num1}`)
    }
    
}

else if(num2 % num1 == 0) {
    console.log(`${num1} es divisor de ${num2}`)
    if(num2 % num3 == 0) {
        console.log(`${num3} es divisor de ${num2}`);
        
    }
}
else if(num3 % num1 == 0) {
    console.log(`${num1} es divisor de ${num3}`)
    if(num3 % num3 == 0) {
        console.log(`${num3} es divisor de ${num3}`);
        
    }
}
else {
    console.log("ninguno de los numeros es divisor de los otros")
}
