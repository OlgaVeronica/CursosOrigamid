
// var ultimoItem = videoGames.pop();

// videoGames.push('3ds');

// for(var numero = 0; numero <= 10; numero++){
//     console.log(numero)
// }

var i = 0;
while(i <= 10){
    console.log(i)
    i++
}

var videoGames = ['switch', 'ps4', 'xbox', '3ds'];


for (var item = 0;item < videoGames.length; item++){
    console.log(videoGames[item])
    if(videoGames[item] === 'ps4'){
        break;
    }
}

var frutas = ['banana', 'pera', 'maça' , 'abacaxi', 'uva'];
frutas.forEach(function(fruta, index){
    frutas.pop()
    console.log(fruta, index, frutas)
})
