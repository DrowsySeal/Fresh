//////////////// SLIDER ////////////////
var slidePosition = 1;
SlideShow(slidePosition);

// Forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  Image controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-item");
  // var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slidePosition-1].style.display = "block";
} 
