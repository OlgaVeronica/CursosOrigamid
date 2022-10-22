/*
const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-descricao')

// h1.innerHTML = '<p>Novo Titulo</p>';
// h1.outerHTML = '<p>Novo Titulo</p>';

// console.log(animaisLista.innerHTML)
// console.log(animaisLista.innerText)

const lista = document.querySelector('.animais-lista')

// console.log(lista.parentElement.parentElement.parentElement)
// console.log(lista.nextElementSibling)
// console.log(lista.previousElementSibling)
console.log(lista.children[lista.children.length - 1])

console.log(lista.querySelector('li:last-child'))

console.log(lista.childNodes)
console.log(lista.previousSibling)

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')

const mapa = document.querySelector('.mapa')

// animais.appendChild(titulo)
// contato.insertBefore(animais, titulo)
// contato.insertBefore(animais, mapa)

// contato.removeChild(titulo)
// contato.replaceChild(mapa,titulo)
contato.replaceChild(lista,titulo)

const novoh1 = document.createElement('h1')
novoh1.innerText = 'Novo Titulo'
novoh1.classList.add('titulo')

mapa.appendChild(novoh1)
console.log(novoh1)
*/


const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneH1 = h1.cloneNode(true)

cloneH1.classList.add('azul')
faq.appendChild(cloneH1)


