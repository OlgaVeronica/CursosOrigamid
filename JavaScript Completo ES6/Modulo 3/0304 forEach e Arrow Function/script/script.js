// const imgs = document.querySelectorAll('img')
// console.log(imgs)

// let i = 0
// imgs.forEach(function(item, index, array){
//     console.log(item, index, array)
// })

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);


// console.log(titulos)
// console.log(titulosArray)

titulosArray.forEach(function(item, index, array){
    //console.log(item, index, array);
});

const imgs = document.querySelectorAll('img')
// console.log(imgs)

imgs.forEach((item, index) => {
    //console.log(item, index)
})

let i = 0;
imgs.forEach(item => {
    return console.log(i++)
})// um argumento apenas nao precisa de parenteses, nenhum ou mais de um precisam sempre

imgs.forEach(item => console.log(i++))



