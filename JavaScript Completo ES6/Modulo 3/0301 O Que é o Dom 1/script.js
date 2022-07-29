// window.alert('aaaa')

const href = window.location.href

console.log(href)

if(href === 'http://127.0.0.1:5500/JavaScript%20Completo%20ES6/Modulo%203/0301%20O%20Que%20%C3%A9%20o%20Dom%201/'){
    console.log('é igual')
}

const h1selecionado = document.querySelector('h1')
const h1Classes = h1selecionado.classList

h1selecionado.addEventListener('click', function(){
    console.log('clicou em', h1selecionado.innerText)
})