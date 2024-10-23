let nombre = prompt("ingrese su nombre").toLowerCase()
let edad = prompt("ingrese su edad")
let sexo = prompt("ingrese su sexo")
let estadocivil = prompt("ingrese su estado civil").toLowerCase()


if(edad >= 40 && sexo === ("hombre" || "h") && estadoCivil === "casado" ){
    console.log(`tu nombre es ${nombre}, tienes ${edad}, eres hombre y estas casado`)
}
else if((edad <= 50 && sexo === ("mujer" || "m") && estadoCivil === ("soltero" || "soltera") )) {
    console.log(`tu nombre es ${nombre}, tienes ${edad}, eres mujer y estas soltera`)
}

else {
    console.log("no cumple con los requisitos")
}