function gerar() {
    let num = document.getElementById("num");
    let tab = document.getElementById("tab");


    if (num.value.ienght == 0) {
        alert("ERROR Digite um número");
    }
    else {
        let n = Number(num. value);
        let c = 1;

        while (c <= 10) {
            let option = document.createElement("opition")
            option.text = "$(c) x $(n) = $ (c*n)";
            option.value = "tab $ (c)";
            tab.appendChild(option);
            c++;
        }
    }
}