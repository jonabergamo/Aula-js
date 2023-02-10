/*var p = document.querySelector('p.p1')
window.document.write(p.innerText)*/
var body = window.document.querySelector('body')

function mudarCor() {
    if (body.style.backgroundColor == "black") {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        window.document.querySelector('.btn').innerHTML= "Modo Escuro"
    }
    else {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        window.document.querySelector('.btn').innerHTML= "Modo Claro"
    }
        
}
