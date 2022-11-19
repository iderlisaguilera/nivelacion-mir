nombre = "Derlis"
function hola(nombre) {
    console.log("Hola " + nombre + "!")
}
hola (nombre)

function bmi(peso, altura){
    return peso / altura ** 2
}
console.log ("El BMI es " + bmi(65, 1.8))

function suma(numero){
let i = 0
let total = 0
while (i <= numero) {
    total = total + i
    i=i+1
}
return total
}
console.log(suma(15))

function calcularColor(num){
    let color;
    if (num === 1){
        color = "black";
    } else if (num === 2) {
        color = "blanco";
    } else if (num === 3){
        color = "rojo";
    } else {
        color = "verde";
    }
    return "El color es " + color;
}
console.log (calcularColor(8))