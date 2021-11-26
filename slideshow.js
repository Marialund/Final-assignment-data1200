
// Slide-index starts at 0
var slideIndex = 0;

// Main function inherits parameter from above variable   
startMemeSlideshow(slideIndex);

// Button for next meme - functionx initiated through onclick
function nextSlide(n) {
  startMemeSlideshow(slideIndex += n);
}

// Main function starts slideshow
function startMemeSlideshow(n) {
  var i;
  var slides = document.getElementsByClassName("memeSlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}