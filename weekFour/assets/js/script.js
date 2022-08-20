// Begin timer on click of start quiz button
var startQuiz = document.getElementById("startQuiz"); // grab the start btn
startQuiz.addEventListener("click", function(){
    console.log("yes!");
    var theTime = document.getElementById("countDown"); // grab the timer 
    var iniTime = 75;
    theTime.innerHTML = iniTime; // add 75 seconds to the clock on click
    console.log(iniTime);
    
    theCount = setInterval(function (){
        iniTime = iniTime - 1;
        console.log(iniTime);
        theTime.innerHTML = iniTime;
    }, 1000);

}); // add click event listener to button

// need to stop timer at 0 
// need to change dom on button click