let btnSaibaMais = document.getElementById('btnSaibaMais')
let btnProx = document.getElementById('btnProx')
let btnVoltar = document.getElementById('btnVoltar')
let container = document.querySelector('.container')
let alterimg = document.getElementById('idImg')
let h1 = document.getElementById('idH1')
let cont = 1
let disableFadeIn = 0

btnSaibaMais.addEventListener('click', function() {
    container.style.display = 'block'
    document.getElementById('divBotaoProx').style.display = 'block'
    btnSaibaMais.style.display = 'none'
})

btnProx.addEventListener('click', function() {
    cont += 1
    container.style.display = 'block'
    document.getElementById('divBotaoVoltar').style.display = 'block'
    if (cont === 2) {
        btnVoltar.style.display = 'block'
        h1.innerHTML = 'Mais conhecido como <strong><em><a href="https://www.netflix.com/br/title/80027042" target="_blank">The Flash!</a></em></strong>'
        alterimg.src = "imagens/flash.jpg"
    } else if (cont === 3) {
        h1.innerHTML = 'Flash já enfrentou os <strong><em>7 piores vilões</em></strong>'
        alterimg.src = "imagens/flash_luta.jpg"
    } else if (cont === 4) {
        btnProx.style.display = 'none'
        h1.innerHTML = 'Que são eles: <strong><em>Flash Reverso, Zoom, Savitar, Devoe, Cicada, Hemoglobina, Mestre dos Espelhos</em></strong>'
        alterimg.src = "imagens/viloes.jpg"
        disableFadeIn = 1
    }
})

btnVoltar.addEventListener('click', function() {
    cont -= 1
    container.style.display = 'block'
    h1.innerText = 'Você sabe quem é Barry Allen?'
    if (cont === 1) {
        btnVoltar.style.display = 'none'
        h1.innerHTML ='Você sabe quem é <strong><em>Barry Allen?</em></strong>'
        alterimg.src = "imagens/barryallen.jpg"
    } else if (cont === 2) {
        h1.innerHTML = 'Mais conhecido como <strong><em><a href="https://www.netflix.com/br/title/80027042" target="_blank">The Flash!</a></em></strong>'
        alterimg.src = "imagens/flash.jpg"
    } else if (cont === 3) {
        btnProx.style.display = 'block'
        h1.innerHTML = 'Flash já enfrentou os <strong><em>7 piores vilões</em></strong>'
        alterimg.src = "imagens/flash_luta.jpg"
    } else if (cont === 4) {
        alterimg.src = "imagens/viloes.jpg"
    }
})
