/* const Dom = {
    seletor: 'li',
    element() { // atalho de element: function(){}
        
        // const elementoSelecionado = document.querySelector(this.seletor)
        // return elementoSelecionado
        return document.querySelector(this.seletor)
    },
    ativar(){
        //  const elementoSelecionado = document.querySelector(this.seletor)
        // elementoSelecionado.classList.add('ativar') 

        this.element().classList.add('ativar')
    }
} */

function Dom(seletor) {
    this.element = function() { 
        return document.querySelector(seletor)
    },
    this.ativar = function(){
    
        this.element().classList.add('ativar')
    }
}

const li = new Dom('li')
const ul = new Dom('ul')

const lastLi = newDom('li:last-child');
lastLi.ativar()

