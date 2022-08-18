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