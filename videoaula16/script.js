function verificar() {
    var num = window.document.getElementById("txt1")

    if(num.value.length == 0) {
        window.alert("Não é possivel realizar a operação enquanto todos os dados não forem preenchidos! Tente Novamente. ")
    } else {
        res.innerHTML = ("Aguarde...")
        let nume = Number(num.value)
     if (nume / 2 == 0) {
        console.log(`O número ${nume} é par`)
    } else {
        window.alert(`O número ${nume} é ímpar`)
    }
    }
    
}