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

// Slideshow-index starts at 0
var memeIndex = 0;

// Main function uses above variable as parameter   
beginMemeSlideshow(memeIndex);

// Button for next meme - function initiates through onclick
function nextSlide(x) {
  beginMemeSlideshow(memeIndex += x);
}

// Main function starts slideshow
function beginMemeSlideshow(x) {
  var y;

  // Imports pictures from HTML
  var slides = document.getElementsByClassName("memeSlides");

    // Makes use of the inbuilt JavaScript index measuring method ".length".
    // If the index number (x) is bigger than the index's length, 
    // the function resets the index counter to the beginning.
        if (x > slides.length) {memeIndex = 1}
    
        if (x < 1) {memeIndex = slides.length}
        for (y = 0; y < slides.length; y++) {
            slides[y].style.display = "none";
        }
  slides[memeIndex-1].style.display = "block";
}