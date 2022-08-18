// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox"); // div with class of carouselbox
// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next"); // next button
var prev = carousel.querySelector(".prev"); // previous button
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function() { // onclick of the carouselbox then the function is run
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function(event) { // onclick of the next button
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation(); // stop the bubbling up the dom so it wont show all the pictures

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) { // going back 1 image
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation(); // it would go to the pictures url because of bubbling

  navigate(-1);
});

navigate(0);


//event.stopPropagation()