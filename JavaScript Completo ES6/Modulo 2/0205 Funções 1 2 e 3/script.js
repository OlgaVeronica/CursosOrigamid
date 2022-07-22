function areaQuadrado(lado){
    return lado * lado
}

console.log(areaQuadrado());

function pi(){
    return 3.14
}

var total = 5 * pi();
console.log(pi()); 

function imc(peso, altura){
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(49, 1.55))

function corFavorita(cor){
    if(cor === 'azul'){
        return 'eu gosto do ceu';
    } else if(cor === 'verde'){
      return 'eu gosto de mato'
    } else {
      return 'eu nao gosto de cores'
    }
}

function mostraConsole(){
    console.log('Oi')
}

addEventListener('click', mostraConsole())

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
  }
  
  imc2(80, 1.1); // retorna o imc
//   console.log(imc2(80, 1.80)); // retorna o imc e undefined

function terceiraIdade(idade){
    console.log(typeof idade)
    if(typeof idade !== 'number'){
        return 'por favor numero'
    }
        else if(idade >=60){
            return true;
        } else{
            return false;
        }
    }


console.log(terceiraIdade())

function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `falta visitar ${totalPaises - paisesVisitados} paises`
}
  
var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro


