

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora sao ${hora} horas.`

    if( hora >= 0 && hora < 12 ){
        //Bom Dia
        img.src = 'manha.jpg'
        document.body.style.background = '#faa643'
    } else if ( hora >= 12 && hora < 18){
        //boa Trade
        img.src = 'tarde.jpg'
        document.body.style.background = '#354e52'
    } else {
        //Boa  Noite
        img.src = 'noite.jpg'
        document.body.style.background = '#6e4c6f'
    }
}

