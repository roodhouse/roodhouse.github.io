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
    var questionDiv  = document.createElement("div");
    var choiceA      = document.createElement("button");
    var choiceB      = document.createElement("button");
    var choiceC      = document.createElement("button");
    var choiceD      = document.createElement("button");
    questionDiv.setAttribute("id", "questionDiv");
    choiceA.setAttribute("id", "choiceA");
    choiceB.setAttribute("id", "choiceB");
    choiceC.setAttribute("id", "choiceC");
    choiceD.setAttribute("id", "choiceD");

    questionDiv.appendChild(choiceA);
    questionDiv.appendChild(choiceB);
    questionDiv.appendChild(choiceC);
    questionDiv.appendChild(choiceD);

    content.appendChild(questionDiv);
    
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
        question: 'At the end of 2021, how many all time wins did the Longhorns have?',
        choiceA: "A. 924",
        choiceB: "B. 899",
        choiceC: "C. 1011",
        choiceD: "D. 876"
        }
    
    var questionFour = {
        question: 'Which of these Longhorns won the Hesiman trophy?',
        choiceA: "A. Roy Williams",
        choiceB: "B. Vince Young",
        choiceC: "C. Earl Thomas",
        choiceD: "D. Ricky Williams"
        }

    var questionFive = {
        question: 'How many weeks have the Longhorns been ranked #1 by the AP?',
        choiceA: "A. 45",
        choiceB: "B. 87",
        choiceC: "C. 32",
        choiceD: "D. 54"
        }
    
    var questionSix = {
        question: 'Aside from Ricky Williams, this Longhorn is the only other RB to accumlate over 5K career rushing yards.',
        choiceA: "A. Jamaal Charles",
        choiceB: "B. Cedric Benson",
        choiceC: "C. Earl Campbell",
        choiceD: "D. D'Onta Foreman"
        }

    var questionSeven = {
        question: 'What is the name of the cannon fired at Longhorn home games?',
        choiceA: "A. BEVO",
        choiceB: "B. Big Bertha",
        choiceC: "C. Smokey",
        choiceD: "D. DKR"
        }
    
    var questionEight = {
        question: 'What is the name of the song sung at the end of every Longhorn home game?',
        choiceA: "A. Deep in the Heart of Texas",
        choiceB: "B. Texas Fight!",
        choiceC: "C. The National Anthem",
        choiceD: "D. The Eyes of Texas"
        }

    var questionNine = {
        question: 'During his tenure at Texas, how many 10+ win season in a row did Mack Brown have?',
        choiceA: "A. 9",
        choiceB: "B. 11",
        choiceC: "C. 5",
        choiceD: "D. 2"
        }
    
    var questionTen = {
        question: 'Before 2011, Texas had beaten this team more than any other team.',
        choiceA: "A. Texas A&M",
        choiceB: "B. Baylor",
        choiceC: "C. Okalahoma",
        choiceD: "D. Texas Tech"
        }
    
    var questionEleven = {
        question: 'Texas has played and never beaten this team.',
        choiceA: "A. Virginia Tech",
        choiceB: "B. Syracuse",
        choiceC: "C. Air Force",
        choiceD: "D. all of the above"
        }
    
    var questionTweleve = {
        question: 'What color jersey do the Longhonrs wear for home games?',
        choiceA: "A. Burnt Orange",
        choiceB: "B. Black",
        choiceC: "C. Yellow",
        choiceD: "D. Maroon"
        }

    var questionThirteen = {
        question: 'In 2017 after an overtime win against Texas, Oklahoma State head coach Mike Gundy said that this player almost beat them by himself.',
        choiceA: "A. Sam Ehlinger",
        choiceB: "B. Brandon Jones",
        choiceC: "C. Breckyn Hager",
        choiceD: "D. Michael Dickson"
        }
    
    var questionFourteen = {
        question: 'This Longhorn QB joins Colt McCoy as the only other Texas QB to thrown for 6 touchdowns in one game.',
        choiceA: "A. Chris Simms",
        choiceB: "B. James Brown",
        choiceC: "C. Vince Young",
        choiceD: "D. Casey Thompson"
        }

    var questionFifteen = {
        question: 'This Longhorn ranks 3rd all time in career receptions at Texas.',
        choiceA: "A. Jordan Shipley",
        choiceB: "B. Roy Williams",
        choiceC: "C. Jaxon Shipley",
        choiceD: "D. Quan Cosby"
        }
    
    var questionSixteen = {
        question: 'With 527 total yards, which Longhorn holds the single game total yards record?',
        choiceA: "A. Jerrod Heard",
        choiceB: "B. Vince Young",
        choiceC: "C. Sam Ehlinger",
        choiceD: "D. Colt McCoy"
        }

    var questionSeventeen = {
        question: 'Which Longhorn is the career leader in field goals made?',
        choiceA: "A. Cameron Dicker",
        choiceB: "B. Phil Dawson",
        choiceC: "C. Jeff Ward",
        choiceD: "D. Dusty Mangum"
        }
    

    questionText.textContent = questionOne.question;
    choiceA.textContent = questionOne.choiceA;
    choiceB.textContent = questionOne.choiceB;
    choiceC.textContent = questionOne.choiceC;
    choiceD.textContent = questionOne.choiceD;

    var questionArray = [questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen, questionEleven, questionTweleve, questionThirteen, questionFourteen, questionFifteen, questionSixteen, questionSeventeen]

    function nextQuestion() {

    var randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)]; // gives one question 
    // console.log(randomQuestion.choiceA); // show the question
    var start = questionArray.indexOf(randomQuestion); // finds the index of the random question
    var deleteCount = 1; // the amount of entries to delete
    questionArray.splice(start, deleteCount); // remove the random question from the question array so that it does not appear again during the quiz
    console.log(questionArray); // show the new questionArray without the random question
    console.log(randomQuestion);

    questionText.textContent = randomQuestion.question;
    choiceA.textContent = randomQuestion.choiceA;
    choiceB.textContent = randomQuestion.choiceB;
    choiceC.textContent = randomQuestion.choiceC;
    choiceD.textContent = randomQuestion.choiceD;

}

    // need to re-traverse the dom here.... then I can do other click listeners and if statements based on those 
    choiceA = document.getElementById("choiceA");

    function endGame() {
        questionText.textContent = 'All done';
            paraText[0].setAttribute("Style", "display: initial;"); // how to setAttribute on all in array with one line?
            paraText[0].innerHTML = "Your final score is "; // + time left on clock
            var endDiv = document.getElementById("endDiv");
            endDiv.setAttribute("Style", "display:flex;");
            choiceA.setAttribute("Style", "display:none;");
            choiceB.setAttribute("Style", "display:none;");
            choiceC.setAttribute("Style", "display:none;");
            choiceD.setAttribute("Style", "display:none;");
    }
        
    // first question
    choiceA.addEventListener("click", function(){  
        console.log("good job choice a");
        if (questionArray.length === 0) {
            endGame();
        } else {
        nextQuestion();
    }

    });

    choiceB.addEventListener("click", function(){  
        console.log("good job choice b");
        if (questionArray.length === 0) {
            endGame();
        } else {
        nextQuestion();
    }
    });

    choiceC.addEventListener("click", function(){    
        console.log("good job choice c");
        if (questionArray.length === 0) {
            endGame();
        } else {
        nextQuestion();
    }
    });

    choiceD.addEventListener("click", function(){  
        console.log("good job choice d");
        if (questionArray.length === 0) {
            endGame();
        } else {
        nextQuestion();
    }
    });


});

var buttons = document.getElementsByTagName('button')
console.log(buttons);


// how to log which answer is correct? // local storage?
// google how to log answer of a quiz in javascript
// research localstorage more
// how to access timer info from outside of the time function?

// assign timer function to variable, then call the variable?