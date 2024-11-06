var idade = 22
if (idade<16){
    console.log('Não vota')
}else if (idade>=18){
    console.log('Voto obrigatório')
} else if (idade>=66 || idade <18){
    console.log('Voto opcional')
}