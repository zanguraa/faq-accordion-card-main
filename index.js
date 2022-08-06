const acc = document.getElementsByClassName("accord");
const spanEl = document.getElementsByClassName('hide-span');
// const showedSpan = document.getElementById('span-2');
const arrowImg = document.getElementsByClassName('img-arrow');
const trueSpan = document.getElementById('span-2');


for(let i = 0; i < acc.length; i++) {

    let hideOrShow = true;

    acc[i].addEventListener('click', ()=> { 

        
    trueSpan.removeAttribute('span-2');
    acc[i].parentElement.parentElement.lastElementChild.classList.toggle('show-span');
    acc[i].nextElementSibling.classList.toggle('arrow-rotate-img');
  let test = acc[1].parentElement.parentElement.lastElementChild.removeAttribute('id');
        

    
    });
}


// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var panel = this.nextElementSibling;
//       if (panel.style.display === "block") {
//         panel.style.display = "none";
//       } else {
//         panel.style.display = "block";
//       }
//     });
//   }
    
 