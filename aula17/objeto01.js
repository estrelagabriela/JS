let eu = {nome:'Estrela',
    sexo:'F',
    peso:69.2,
    emagrecer(p=0){
        console.log('Emagreceu')
        this.peso -= p
    }}
    eu.emagrecer(9)
    console.log(`${eu.nome} pesa ${eu.peso}kg`)
