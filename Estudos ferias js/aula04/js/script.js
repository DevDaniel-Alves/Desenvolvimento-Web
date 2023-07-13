function nome() {
    var nomePessoa = document.getElementById('val01').value
    var resposta = document.getElementById('atv01')
    var tamanho = nomePessoa.length


    resposta.innerHTML = `Prazer ${nomePessoa}`
    resposta.innerHTML += `E tem ${tamanho}`
}

function valor() {
    var valor = document.getElementById('val01').value
    var resposta = documento.getElementById('atv02')

    resposta.innerHTML = valor.valueOf();
}


function maiorMenor() {
    var nu1 = Number(document.getElementById('indice01').value)
    var nu2 = Number(document.getElementById('indice02').value)
    var res = document.getElementById('atv03')

    if (nu1 > nu2) {
        res.innerHTML = `${nu1} maior`
    } else {
        res.innerHTML = `${nu2} maior`
    }
}


function posinega() {
    var num1 = Number(document.getElementById('nume01').value)
    var respo = document.getElementById('atv04')

    if (num1 < 0) {
        respo.innerHTML = `Esté numero é negativo`
    } else {
        respo.innerHTML = `Esté numero é positivo`
    }
}


function mediaaluno() {
    var nota01 = Number(document.getElementById('ind01').value)
    var nota02 = Number(document.getElementById('ind02').value)
    var media = (nota01 + nota02) / 2
    var ress = document.getElementById('atv05')

    if (media < 10) {
        ress.innerHTML = `Aluno aprovado`
    } if (media === 10) {
        ress.innerHTML = `Aprovado com destinção`
    } if (media < 7) {
        ress.innerHTML = `Reprovado`
    }
}

function calculadora() {
    var numero01 = Number(document.getElementById('val01').value)
    var numero02 = Number(document.getElementById('val02').value)
    var respos = document.getElementById('atv06')
    var select = document.getElementById('select')
    var operador = select.selectedIndex

    switch (operador) {
        case 0:
            respos.innerHTML = "selecione uma operação"
            break;
        case 1:
            var soma = numero01 + numero02
            respos.innerHTML = soma
            break;
        case 2:
            var sub = numero01 - numero02
            respos.innerHTML = sub
            break;
        case 3:
            var multi = numero01 * numero02
            respos.innerHTML = multi
            break;
        case 4:
            var div = numero01 / numero02
            respos.innerHTML = div
            break;

    }
}