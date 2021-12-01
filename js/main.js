 "use strict"

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
     console.log(e)
}
 