"use strict";

const wrapperBtn = document.getElementById('wrapper-btn');

const btn = document.querySelector('#wrapper-btn button');

btn.addEventListener('click',({target})=>{ target.innerText = target.innerText === 'on'? 'off': 'on';
});


const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const {target} = event;
    const isClose = target.innerText ==='close';
    target.innerText = isClose ? 'open' : 'close';
    const display = isClose ?  'none':'block';
    // nextElementSibling.remove();
    target.nextElementSibling.style.setProperty('display',display);
})








