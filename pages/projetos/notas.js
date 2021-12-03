function calculaMedia() {

    /* Criando referência */

    var inNome = document.getElementById("inNome")

    var inNota1 = document.getElementById("inNota1")
    var inNota2 = document.getElementById("inNota2")
    var inNota3 = document.getElementById("inNota3")
    var inNota4 = document.getElementById("inNota4")

    var outSituacao = document.getElementById("outSituacao")
    var outMedia = document.getElementById("outMedia")


    /* Valores e importação */
    var nome = inNome.value
    var nota1 = Number(inNota1.value)
    var nota2 = Number(inNota2.value)
    var nota3 = Number(inNota3.value)
    var nota4 = Number(inNota4.value)


    /* Calcular Média*/
    var media = (nota1 + nota2 + nota3 + nota4) / 4


    /* Apresentação da média */
    outMedia.textContent = `Média das suas notas: ${media}`


    /* Criando Condições */

    if( media >= 7 && media < 9) {
        outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado(a).`
        outSituacao.style.color = "blue"
    } else if (media >= 9){
        outSituacao.textContent = `Excelente ${nome}! Você foi aprovado(a) com uma excelente média.`
        outSituacao.style.color = "blue"
    } else {
        outSituacao.textContent = `"Ops" ${nome}! Você foi reprovado(a).`
        outSituacao.style.color = "red"
    }
}

/* Criar um referência ao elemento btresultado */

var btresultado = document.getElementById("btResultado")

btresultado.addEventListener("click", calculaMedia)


