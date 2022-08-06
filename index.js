const acc = document.getElementsByClassName("accord");
const spanEl = document.getElementsByClassName('hide-span');
// const showedSpan = document.getElementById('span-2');
const arrowImg = document.getElementsByClassName('img-arrow');
const trueSpan = document.getElementById('span-2');
    
for(let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', ()=> { 
    acc[i].parentElement.parentElement.lastElementChild.classList.toggle('show-span');
    acc[i].nextElementSibling.classList.toggle('arrow-rotate-img');
    });
}


    
 