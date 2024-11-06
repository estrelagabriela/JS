function parimpar(n){
    if (n%2==0){
        //console.log(`O número ${n} é par!`)
        return 'par'
    }else{
        //console.log(`O número ${n} é ímpar!`)
        return 'ímpar'
    }
}
var res = parimpar(11)
console.log(res)