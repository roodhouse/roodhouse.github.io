// Begin timer on click of start quiz button
var startQuiz = document.getElementById("startQuiz"); // grab the start btn

// timer function
startQuiz.addEventListener("click", function(){ // timer function that fires on start quiz button click
    console.log("yes!");
    var theTime = document.getElementById("countDown"); // grab the timer 
    var iniTime = 5;
    theTime.innerHTML = iniTime; // add 75 seconds to the clock on click
    console.log(iniTime);
    
    theCount = setInterval(function (){ // countdown function. @ 0 will display a message else will display a count down
        iniTime = iniTime - 1;
        if (iniTime <= 0) {
            clearInterval(theCount);
            theTime.innerHTML = "Game Over";
        } else {
            theTime.innerHTML = iniTime;
        };
    }, 1000);

}); // add click event listener to button 

// Quiz function
startQuiz.addEventListener("click", function(){

    // setting up initial variables
    var questionText = document.getElementById("questionText");
    var paraText     = document.getElementsByClassName("para");
    var startBtn     = document.getElementById("startQuiz");
    var content      = document.getElementById("content");
    var choiceA      = document.createElement("button");
    var choiceB      = document.createElement("button");
    var choiceC      = document.createElement("button");
    var choiceD      = document.createElement("button");

    content.appendChild(choiceA);
    content.appendChild(choiceB);
    content.appendChild(choiceC);
    content.appendChild(choiceD);
    
    // removing items from the dom
    paraText[0].setAttribute("Style", "display: none;"); // how to setAttribute on all in array with one line?
    paraText[1].setAttribute("Style", "display: none;"); // how to setAttribute on all in array with one line?
    paraText[2].setAttribute("Style", "display: none;"); // how to setAttribute on all in array with one line?
    startBtn.setAttribute("Style", "display: none;");

    // inserting new content into the dom
    // question array (an arrray of my question blocks will go here)

    var questionOne = {
        question: 'Test question one',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    questionText.textContent = questionOne.question;
    choiceA.textContent = questionOne.choiceA;
    choiceB.textContent = questionOne.choiceB;
    choiceC.textContent = questionOne.choiceC;
    choiceD.textContent = questionOne.choiceD;

});


// question array

// have variables that are the question and answer in array form
// quesion array is an array of these varaiables 

// create 9 more questions
// create array with the 10 questions
// try to access new array and draw out info


// how to return the value of the startQuiz click listener?