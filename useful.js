// countdown function
function countdown() {
    var timeLeft = 5;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      timeLeft--;
      if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second left';
      } else {
        timerEl.textContent = timeLeft + ' seconds left';
      }
  
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }

  // show more or show less function
  // need to change the css rules for the targeted classes 
  var content = document.getElementById("contents");
  console.log(content);
  
  var button =  document.getElementById("show-more");
  console.log(button);
  
  button.onclick = function() {
      if(content.className == "open" ) {
          // shrink the box
          content.className = "";
          button.innerHTML = "Show More";
      } else {
          // expand the box
          content.className = "open";
          button.innerHTML = "Show Less";
      }
  };


// simple timer function: calls one time after page load
var myMessage = document.getElementById("message");

function showMessage() {
    myMessage.className = "show";
}

setTimeout(showMessage, 3000);


// color changer function // cycle through colors at an interval
var colorChanger = document.getElementById("color-changer"); // getting the element with ID color-changer
var colors = ["red", "blue", "green", "pink"]; // array of colors we want to cycle through
var counter = 0; // counts as the colors change

function changeColor() {

    
    if( counter >= colors.length) { // if the counter and the lenght of the array are the same, then reset the count to 0. This causes the function to start over
        counter = 0;
    }

    colorChanger.style.background = colors[counter]; // change the color of the background based on the position in the colors array
    counter++; // adding by one each time the background is changed
}

var myTimer = setInterval(changeColor, 3000); // running the changeColor function every 3000ms 

colorChanger.onclick = function() { // stop the cycle on click of the image 
    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer Stopped";

}
