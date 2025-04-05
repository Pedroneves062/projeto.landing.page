var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadireta = window.document.getElementById("seta-direita")
var setaesquerda = window.document.getElementById("seta-esquerda")

 function rolarparadireta() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setadireta.style = "display:none"
    setaesquerda.style = "display:flex; margin-top: 55px"

}
function rolarparaesquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setadireta.style = "display:flex; margin-top: 55px"
    setaesquerda.style = "display:none"

}
