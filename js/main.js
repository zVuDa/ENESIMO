 "use strict"
const hide = document.querySelector(".hide");

 var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("myslides");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   slides[slideIndex-2].style.display = "block"; 

}


document.querySelector("#next1").onclick = e =>{
    e.preventDefault(); 
    let indice = 0;
    let hijos = e.target.parentElement.parentElement.children;
    for(let i=0, tam=hijos.length; i<tam-2 ;i++){
        if(hijos[i].classList.contains('hide')!==true){
            hijos[i].classList.add('hide');
            indice = i; if(indice===8){
                indice = 0;}
           
        }
    }
    for(let i = indice; i<indice+3; i++){
        hijos[i].classList.remove('hide');
      
    }
    // console.log(indice)
    // if(indice===8){
    //     indice = 0;
    // }

    //hide.style = `display:block`

    }
 