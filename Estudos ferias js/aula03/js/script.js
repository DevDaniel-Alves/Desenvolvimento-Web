var n1 = Number(prompt('Primeira numero'))
var n2 = Number(prompt('Segunda nota'))
var n3 = Number(prompt('Terceira nota'))

var msg = document.getElementById('text')

if (n1 > n2 && n1 > n2) {
    msg.innerHTML = n1
}
if (n2 > n3 && n2 > n1) {
    msg.innerHTML = n2
}
if (n3 > n1 && n3 > n2) {
    msg.innerHTML = n3
}