function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#a6b7d5'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#f87700'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#593c5b'
    }
}


