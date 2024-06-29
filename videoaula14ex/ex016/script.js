function contar() {
    var ini = window.document.getElementById("txti")
    var fin = window.document.getElementById("txtf")
    var pass = window.document.getElementById("txtp")
    

    if (ini.value.length == 0 || fin.value.length == 0 || pass.value.length == 0) {
        window.alert("Não é possivel realizar a operação enquanto todos os dados não forem preenchidos! Tente Novamente. ")
    } else {
        res.innerHTML = ("Contando: ")
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(pass.value)
        if(p <= 0){
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if(i < f) {
            //contagem crescente
            for(let c = i;c <= f; c += p){
                res.innerHTML += ` ${c}\u{1F590}`
            }

        } else {
            //contagem decrescente
            for(let c = i;c >= f; c +- p) {
                res.innerHTML += ` ${c}\u{1F590}`
            }

        }
        res.innerHTML += `\u{1F3C1}`
    }

    

}