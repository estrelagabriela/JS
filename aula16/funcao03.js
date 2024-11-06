function fator(n){
    var pos = 1
    for(c=n;c>1;c--){
        pos *= c
    } 
    return pos
}    
console.log(fator(5))