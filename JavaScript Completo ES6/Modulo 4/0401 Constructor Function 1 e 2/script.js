// jeito errado pq sobrescreve o objeto e não cria outro

/* const carro = {
    marca: 'Marca',
    preco: 0,
}

//const Honda = {
//    marca: 'Honda',
//    preco: 10000,
//} 

const honda = carro
honda.marca = 'honda'
honda.preco = '20000'

const fiat = carro
fiat.marca = 'fiat'
fiat.preco = '50000' */


function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida
    this.preco = precoAtribuido
}

const honda = new Carro('HONDA', 3000)
const fiat = new Carro('fiat', 4000)
fiat.marca = 'fiat'

/* honda.teste = 'oi'
honda.andar = () => {
    console.log('andou')
} */

function Carro2(marca, precoInicial){
    this.taxa = 1.2
    const precoFinal = precoInicial * this.taxa
    this.marca = marca
    console.log(this)
    this.preco = precoFinal
}

const mazda = new Carro2('Mazda', 5000)

