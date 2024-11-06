function contar(){
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    var res = document.getElementById('res')
    if (isNaN(inicio)||isNaN(fim)||isNaN(passo) || passo<=0){
        res.innerHTML='Por favor, preencha corretamente os espaços!'
        return
    }
    var resultado = ' '
    //contagem crescente
    if(inicio<fim){
        for(var c = inicio; c<=fim; c+=passo){
        resultado += `${c}👉`
    }
}else{
    //contagem descrescente
    for(var c = inicio; c>=fim; c-=passo){
        resultado += `${c}👉`
    }
}
    
    
    res.innerHTML = `A contagem é ${resultado}🚩`
}