function Gerar(){
    var n = document.getElementById('txtn').value
    var caixa = document.getElementById('txt')
    if (n == ''){
        window.alert('Por favor, digite um número válido!')
        return
    } 
    n = Number(n)
    caixa.innerHTML = ' '
    for  (var c=0;c<=10;c++){
    var resultado = n*c  
    var item = document.createElement('option')
    item.text = `${n} X ${c} = ${resultado}\n`
    caixa.append(item)
        }
    }
