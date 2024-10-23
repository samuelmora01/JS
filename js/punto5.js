
let numero1 = parseInt(prompt("digite el primer valor "))
let numero2 = parseInt(prompt("digite el segundo valor "))
let numero3 = parseInt(prompt("digite el tercer valor "))

if (numero1 > numero2 && numero1 > numero3 ){
    console.log(numero1 + "es mayor que: " + numero2 , "y que", + numero3)
}

else  {
    if(numero3 > numero1 && numero3 > numero2 ){
        console.log(numero3 + "es mayor que: " + numero1 , "y que", + numero2 )
    }else{
        console.log(numero2 + "es mayor que: " + numero1 , "y que", +numero3)
    }
}
