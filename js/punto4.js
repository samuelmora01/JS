let categoria = ["diseñador", "programador", "jefe"]

let empleado = parseInt(prompt("dime tu cargo: (1-3)" + {categoria}))

if(empleado == 1){
    console.log("tu sueldo es 2000")
}

else if(empleado == 2){
    console.log("tu sueldo es 3000")
}

else if(empleado == 3){
    console.log("tu sueldo es 5000")
}

else {
    console.log("cargo no encontrado")
}