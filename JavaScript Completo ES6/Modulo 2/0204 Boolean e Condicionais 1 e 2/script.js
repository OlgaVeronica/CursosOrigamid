var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao){
    console.log('é verdadeiro');
    var x = 10;
}
else if(possuiDoutorado){
    console.log('possui doutorado');
} else{
    console.log('nao possui nada')
}
var nome= '10kg' * 12 

if(nome){
    console.log(nome)
}else{
    console.log('nome nao existe')
}


if(!possuiGraduacao){
    console.log('nao possui graduacao')
}  

var x = 10;

console.log(x !== 100);

var condicional = (5 - 10) && (5 + 5);
if (condicional){
    console.log('verdadeiro', condicional);
}
else{
    console.log('falso ');
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2);

console.log(condicional2);

var corFavorita = 'Verde';

switch(corFavorita){
    case 'Azul':
        console.log('Olhe para o céu');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol');
        break;
    case 'Verde':
        console.log('Olhe para a floresta');
        break;
    default:
        console.log('Feche os olhos')
}