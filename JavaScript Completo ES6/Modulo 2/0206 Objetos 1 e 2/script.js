var pessoa ={
    nome: 'Olga',
    idade: 18,
}

console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado){
        return this.lados * lado
    }
}

console.log(quadrado.area(4))
console.log(quadrado.perimetro(4))

var height = 100
var menu ={
    width:800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight(){
        return this.height / 2
    }
}

menu.backgroundColor ='#000';

menu.color = 'blue';

menu.esconder = function(){
    console.log('Escondi')
}

var bg = menu.backgroundColor;