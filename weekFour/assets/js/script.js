// Begin timer on click of start quiz button
var startQuiz = document.getElementById("startQuiz"); // grab the start btn
var iniTime = 0;

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
        // console.log("This is the initime: " + iniTime); // can I put my question array here? no because it will print it out every second
        
        
    }, 1000);

}); // add click event listener to button 


// Quiz function
startQuiz.addEventListener("click", function(){

    // console.log("quiz console log: " + document.getElementById("countDown").innerHTML);
    // setting up initial variables
    var questionText = document.getElementById("questionText");
    var paraText     = document.getElementsByClassName("para");
    var startBtn     = document.getElementById("startQuiz");
    var content      = document.getElementById("content");
    var choiceA      = document.createElement("button");
    var choiceB      = document.createElement("button");
    var choiceC      = document.createElement("button");
    var choiceD      = document.createElement("button");
    choiceA.setAttribute("id", "choiceA");
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
        question: 'Who is the most winningest quarterback in Longhorn history?',
        choiceA: "A. Major Applewhite",
        choiceB: "B. Colt McCoy",
        choiceC: "C. Vince Young",
        choiceD: "D. Sam Ehlinger"
        }
    
    var questionTwo = {
        question: 'How many national Championships does UT have?',
        choiceA: "A. 5",
        choiceB: "B. 1",
        choiceC: "C. 4",
        choiceD: "D. 3"
        }

    var questionThree = {
        question: 'Test question three',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    var questionFour = {
        question: 'Test question four',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }

    var questionFive = {
        question: 'Test question five',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    var questionSix = {
        question: 'Test question six',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }

    var questionSeven = {
        question: 'Test question seven',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    var questionEight = {
        question: 'Test question eight',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }

    var questionNine = {
        question: 'Test question nine',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    var questionTen = {
        question: 'Test question ten',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    var questionEleven = {
        question: 'Test question eleven',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    var questionTweleve = {
        question: 'Test question tweleve',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }

    var questionThirteen = {
        question: 'Test question Thirteen',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    var questionFourteen = {
        question: 'Test question fourteen',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }

    var questionFifteen = {
        question: 'Test question fifteen',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    var questionSixteen = {
        question: 'Test question sixteen',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }

    var questionSeventeen = {
        question: 'Test question seventeen',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    var questionEightteen = {
        question: 'Test question eightteen',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }

    var questionNineteen = {
        question: 'Test question nineteen',
        choiceA: "A. Test",
        choiceB: "B. Test",
        choiceC: "C. Test",
        choiceD: "D. Test"
        }
    
    var questionTwenty = {
        question: 'Test question twenty',
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

    var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen, questionEleven, questionTweleve, questionThirteen, questionFourteen, questionFifteen, questionSixteen, questionSeventeen, questionEightteen, questionNineteen, questionTwenty]

    

    var randomQuestion = questionArray[Math.floor(Math.random() * 20)]; // gives one question
    console.log(randomQuestion.choiceA); // show the question
    var start = questionArray.indexOf(randomQuestion); // finds the index of the random question
    var deleteCount = 1; // the amount of entries to delete
    questionArray.splice(start, deleteCount); // remove the random question from the question array so that it does not appear again during the quiz
    console.log(questionArray); // show the new questionArray without the random question

    // need to re-traverse the dom here.... then I can do other click listeners and if statements based on those 
    choiceA = document.getElementById("choiceA");
    

    choiceA.addEventListener("click", function(){
        questionText.textContent = questionTwo.question;
        choiceA.innerHTML = questionTwo.choiceA; 
        choiceB.innerHTML = questionTwo.choiceB; 
        choiceC.innerHTML = questionTwo.choiceC; 
        choiceD.innerHTML = questionTwo.choiceD;    
        console.log("good job");
    });

    choiceB.addEventListener("click", function(){
        questionText.textContent = questionTwo.question;
        choiceA.innerHTML = questionTwo.choiceA; 
        choiceB.innerHTML = questionTwo.choiceB; 
        choiceC.innerHTML = questionTwo.choiceC; 
        choiceD.innerHTML = questionTwo.choiceD;    
        console.log("good job");
    });

    choiceC.addEventListener("click", function(){
        questionText.textContent = questionTwo.question;
        choiceA.innerHTML = questionTwo.choiceA; 
        choiceB.innerHTML = questionTwo.choiceB; 
        choiceC.innerHTML = questionTwo.choiceC; 
        choiceD.innerHTML = questionTwo.choiceD;    
        console.log("good job");
    });

    choiceD.addEventListener("click", function(){
        questionText.textContent = questionTwo.question;
        choiceA.innerHTML = questionTwo.choiceA; 
        choiceB.innerHTML = questionTwo.choiceB; 
        choiceC.innerHTML = questionTwo.choiceC; 
        choiceD.innerHTML = questionTwo.choiceD;    
        console.log("good job");
    });
    



    


    // function newQuestionFunction( {

    // })


});

var buttons = document.getElementsByTagName('button')
console.log(buttons);


// question array
// finish logic with question array and then move on to other issues

// how to access timer info from outside of the time function?

// assign timer function to variable, then call the variable?