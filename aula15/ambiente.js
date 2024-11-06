var num = [5,8,2,9,3]
num.sort()
console.log(`Meu vetor tem os seguintes números ${num}`)
console.log(`Meu vetor tem ${num.length} posições`)
console.log(`A primeira posição contém o número = ${num[0]}!`) 
var pos = num.indexOf(1)
if (pos==-1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
