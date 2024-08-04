console.dir(window.document.body.children)


const [h1,p] = window.document.body.children;
// console.log(h1,p);

function hundlerClick(){
    alert('h1 on klick')
}

h1.addEventListener('click',hundlerClick);
// h1.removeEventListener('click',hundlerClick)


h1.onclick = function(){
    console.log('onklick 1');
}
h1.onclick = function(){
    console.log('onklick 2');
}
h1.onclick = function(){
    console.log('onklick 3');
}