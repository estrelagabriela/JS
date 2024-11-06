var vetor = []
function adicionar(){
    var num = Number(document.getElementById('txtn').value)
    var caixa = document.getElementById('caixadeselecao')
    var res = document.getElementById('txt')
    if(num <1 || num>100){
       alert("Valor inválido!Valor digitado não está entre 1 e 100")
    }else if (vetor.includes(num)){
        alert("O número já foi inserido! Por favor, coloque um número diferente!")
    }else {
        vetor.push(num)
        vetor.sort(function(a,b){
            return a-b
        })
        var option = document.createElement('option')
        option.text = `Valor ${num} adicionado!`
        caixa.appendChild(option)
        res.innerHTML=''

    }
    document.getElementById('txtn').value = ''
}function finalizar(){
    if(vetor.length==0){
        alert("Por favor, insira os valores para finalizar!")
    }else{
        var res = document.getElementById('txt')
        res.innerHTML=` O vetor contém:[ ${vetor.join(',')}] <br>
        Ao todo temos ${vetor.length} números adicionados. <br>
        O maior valor digitado foi ${Math.max(...vetor)} <br>
        O menor valor digitado foi ${Math.min(...vetor)} <br>
        Somando todos os valores temos: ${vetor.reduce((total,num) => total +num, 0)} <br>
        A média entre os valores é de: ${(vetor.reduce((total,num) => total +num, 0)/vetor.length).toFixed(2)}`
    }
}
