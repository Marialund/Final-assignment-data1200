/* Making it so that the code switches between the responsive class, and the topnav class.*/
function navigation(){
    var x = document.getElementById("Nav-bar");
    if (x.className === "topnav"){
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }
}


/* toggling between the rotating animation on the navbar on mobile phone.*/
function navigation2(x) {
    x.classList.toggle("change");
}



/* Slideshow */

// Slide-index starts at 0
var slideIndex = 0;

// Main function uses above variable as parameter   
beginMemeSlideshow(slideIndex);

// Button for next meme - function initiates through onclick
function nextSlide(x) {
  beginMemeSlideshow(slideIndex += x);
}

// Main function starts slideshow
function beginMemeSlideshow(x) {
  var i;
  var slides = document.getElementsByClassName("memeSlides");

//If  
  if (x > slides.length) {slideIndex = 1}
  if (x < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}