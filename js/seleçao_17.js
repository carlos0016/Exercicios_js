function controllerGols() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var operacao = document.getElementById("operacao").value;

    var resultado = calculo(valor1, valor2, operacao);
    saidaDados("resultaddo: " + resultado);
}

function saidaDados(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}

function calculo(valo1 = 0, valor2 = 0, operacao = 0) {
    if (operacao == 1) {
        return valo1 + valor2;
    } else if (operacao == 2) {
        return valo1 - valor2;
    } else if (operacao == 3) {
        return valo1 / valor2;
    } else if (operacao == 4) {
        return valo1 * valor2;
    }
    return 0


}