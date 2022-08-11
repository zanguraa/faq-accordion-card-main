const acc = document.getElementsByClassName("accord");
const spanEl = document.getElementsByClassName('hide-span');
// const showedSpan = document.getElementById('span-2');
const arrowImg = document.getElementsByClassName('img-arrow');
const trueSpan = document.getElementById('span-2');
    
let same = false;
for(let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', (event)=> { 
        let findActive = document.querySelector('.active');
        let h4;
        if(findActive) {
            h4 = findActive.firstElementChild.firstElementChild;
        }
        console.log(h4);
        if(h4 == acc[i]) {
           findActive.classList.toggle('active');
        } else {
            findActive?.classList.remove('active');
            acc[i].parentElement.parentElement.classList.toggle('active');

        }

        
    
    });
    
    
}




    
 