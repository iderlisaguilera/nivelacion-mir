const arreglo = [1, 2, 3]
function sum (arreglo){
    return arreglo.reduce((a, b)=>a+b, 0);
}
console.log(sum(arreglo))
const arreglo2 = [10, 8, 12, 5]
function sum2 (arreglo2){
    let total = 0
    for (let i = 0; i<arreglo2.length; i++){
        total += arreglo2[i]
    }
    return total
}
console.log(sum2(arreglo2))
let arreglo3 = [10, 9, 25, 7, 6, 5, 4]
function max(arreglo3){
    let maximo = 0
    for (let i =0; i<arreglo3.length; i++){
        if (arreglo3[i]>maximo){
            maximo = arreglo3[i]
        }
    }
    return maximo
}
console.log (max(arreglo3))

let arreglo4 = [1,3,2,50]
function maxIndex(arreglo4){
    let maximo2 = 0
    let maxIndex = 0
    for (let i =0; i<arreglo4.length; i++){
        if (arreglo4[i]>maximo2){
            maximo2 = arreglo4[i]
            maxIndex = i
        }
    }
    return maxIndex
}
console.log (maxIndex(arreglo4))

let arreglo5 = ["Make", "It", "Real"]
function join(arreglo5){
    let maxIndex2 = ""
    for (let i =0; i<arreglo5.length; i++){
        maxIndex2 += arreglo5[i]+" "
    }
    return maxIndex2
}
console.log (join(arreglo5))

