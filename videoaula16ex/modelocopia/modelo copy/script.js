function adicionar() {
    let num = document.getElementById("txt1")
    let tab = window.document.getElementById("seltab")

    if(num.value.length == 0 ) {
        window.alert("Preencha os dados e tente novamente")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            let item = window.document.createElement('option')
            item.text = `${n}`
            tab.appendChild(item)
            c++
        }
    }
       
} 