let nota1 = parseInt(prompt("ingrese la nota: "))
let nota2 = parseInt(prompt("ingrese la nota: "))
let nota3 = parseInt(prompt("ingrese la nota: "))
let nota4 = parseInt(prompt("ingrese la nota: "))
let nota5 = parseInt(prompt("ingrese la nota: "))
const promedio = (nota1 +nota2 + nota3+ nota4+ nota5)/5

if (promedio > 75) {
    console.log("has aprobado la materia en " + promedio)
}
else {
    console.log(`no has logrado aprobar, tu nota es ${promedio} y necesitas minimo 75`)
}