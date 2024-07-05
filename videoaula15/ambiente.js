let num = [2,8,9,7]
num.sort()
num.push(10)

console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é o número ${num[0]}`)

let pos = num.indexOf(8)

if(pos == -1) {
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}


