function media() {
    var nome = prompt('Qual o nome do aluno?')
    var nota1 = Number(prompt('Primeira nota'))
    var nota2 = Number(prompt('Segunda nota'))
    media = (nota1 + nota2) / 2

    var mens
    if (media >= 6) {
        mens = 'Parabéns, aluno a provado'
    }
    else {
        mens = 'Sinto muito, aluno reprovado'
    }

    var resultado = document.getElementById('status')
    resultado.innerHTML = `<p>Aluno <strong>${nome}</strong></p>`
    resultado.innerHTML += `<p>A primeira nota foi ${nota1} e segunda nota foi ${nota2}</p>`
    resultado.innerHTML += `<p>A media do aluno foi ${media}</p>`
    resultado.innerHTML += `<p>Situação do aluno: ${mens}</p>`
}