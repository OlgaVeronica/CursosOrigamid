const menu = document.querySelector('.menu')

 menu.classList.add('ativo', 'teste')
 menu.classList.remove('azul')
 menu.classList.toggle('azul')

 if(menu.classList.contains('azul'))
    menu.classList.add('possui-azul')
 else
 menu.classList.add('nao-possui-azul')
//  menu.className = menu.className + ' vermelho'
//  menu.className += ' vermelho'
//  console.log(menu.className)

const animais =  document.querySelector('.animais')
console.log(animais.attributes['data-texto'])

const img = document.querySelector('img')

const srcImg = img.getAttribute('alt')

img.setAttribute('alt', 'é uma raposa')
const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt)

console.log(img.getAttribute('alt'))

const carro = {
   portas: 4,
   andar(km){
      console.log(`andou ${km}`)
   }
}