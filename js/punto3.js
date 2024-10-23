let sueldo = parseFloat(prompt("Digite su sueldo"))

porc = sueldo * 0.15

aumento = porc + sueldo
if(sueldo < 300000)
    document.write("su sueldo es de: " , aumento)