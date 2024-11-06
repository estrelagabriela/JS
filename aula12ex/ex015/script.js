function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) >= ano){
        window.alert('[ERROR] TENTE NOVAMENTE!');
    } else {
        var fsex=document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade>=1 && idade<10){
                //criança
                img.setAttribute('src','meninobb.png')
            } else if (idade>=10 && idade<23){
                //jovem
                img.setAttribute('src','meninojovem.png')
            }else if (idade>=23 && idade<50){
                //adulto
                img.setAttribute('src','homemadulto.png')
            }else {
                //idoso
                img.setAttribute('src','homemvelho.png')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade>=1 && idade <10){
            //criança
            img.setAttribute('src','meninabb.png')
        }else if (idade>=10 && idade<23){
            //jovem
            img.setAttribute('src','meninajovem.png')
        }else if (idade>=23 && idade<50){
            //adulto
            img.setAttribute('src','mulheradulta.png')
        }else {
            //idoso
            img.setAttribute('src','mulhervelha.png')
        }
    }    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`   
        res.appendChild(img)
    }
}
