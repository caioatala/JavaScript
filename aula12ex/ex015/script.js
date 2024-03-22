function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert ('[ERRO]Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var gênero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src','bbh.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','hj.jpg')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','ha.jpg')
            }else {
                //idoso
                img.setAttribute('src','hv.jpg')
            }
            } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src','bbm.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','mj.jpg')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','ma.jpg')
            }else {
                //idoso
                img.setAttribute('src','mv.jpg')
            }
        }
        res.style.textAlign = ' center'
        res.innerHTML = `Detectamos${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}