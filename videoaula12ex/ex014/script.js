function carregar( ) {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png.png'
        document.body.style.background = "#a1ceed"
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE 
        img.src = 'fototarde.png.png'
        document.body.style.background = "#f4bc84"
    } else {
        img.src = 'fotonoite.png.png'
        document.body.style.background = "#243456"
    }
}
