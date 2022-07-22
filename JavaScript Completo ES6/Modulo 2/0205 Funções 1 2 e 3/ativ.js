// Crie uma função para verificar se um valor é Truthy

function verificarValor(valor){
    console.log(!!valor)
    if(valor){
        return console.log('é truthy')
    }else{
        return console.log('é falsy')
    }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calcularPerimetro(lado){
    var perimetro = lado * 4
    return console.log(`O perímetro do quadrado é ${perimetro}`) 
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}

// Crie uma função que verifica se um número é par
function verificarParidade(numero){
    var modulo = numero % 2;
    var paridade;
    if(modulo === 0){
        paridade = 'É par';
    }else{
        paridade = 'É impar';
    }
    return paridade;
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
    return `O tipo de dado de (${dado}) é ${typeof dado}`
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function(){
    console.log('Olga Veronica')
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  