let valores = [2,4,6,9,1,3]

//console.log(valores)

/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])*/

/*for(pos=0;pos<valores.length;pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}