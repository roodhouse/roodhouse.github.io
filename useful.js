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