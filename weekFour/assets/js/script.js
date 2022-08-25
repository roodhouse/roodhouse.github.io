// Begin timer on click of start quiz button
var startQuiz = document.getElementById("startQuiz"); // grab the start btn
var theTime = document.getElementById("countDown"); // grab the timer 
var iniTime = 50;
var score = 0;
var feedBack = document.createElement("div");
feedBack.classList.add("feedBack");
feedBack.setAttribute("style", "display:none;");

var myQuestions = [
    {
        question: 'Who is the most winningest quarterback in Longhorn history?',
        answers: {
            A: "A. Major Applewhite",
            B: "B. Colt McCoy",
            C: "C. Vince Young",
            D: "D. Sam Ehlinger"
        },
        correctAnswer: 'B. Colt McCoy'
    },
    {
        question: 'How many national Championships does UT have?',
        answers: {
            A: "A. 5",
            B: "B. 1",
            C: "C. 4",
            D: "D. 3"
        },
        correctAnswer: 'C. 4'
    },
    {
        question: 'At the end of 2021, how many all time wins did the Longhorns have?',
        answers: {
        A: "A. 924",
        B: "B. 899",
        C: "C. 1011",
        D: "D. 876"
    },
        correctAnswer: 'A. 924'
    },
    {
        question: 'Which of these Longhorns won the Hesiman trophy?',
        answers: {
        A: "A. Roy Williams",
        B: "B. Vince Young",
        C: "C. Earl Thomas",
        D: "D. Ricky Williams"
    },
        correctAnswer: 'D. Ricky Williams'
    },
    {
        question: 'How many weeks have the Longhorns been ranked #1 by the AP?',
        answers: {
            A: "A. 45",
            B: "B. 87",
            C: "C. 32",
            D: "D. 54"
    },
        correctAnswer: 'A. 45'
    },
    {
        question: 'Aside from Ricky Williams, this Longhorn is the only other RB to accumlate over 5K career rushing yards.',
        answers: {
            A: "A. Jamaal Charles",
            B: "B. Cedric Benson",
            C: "C. Earl Campbell",
            D: "D. D'Onta Foreman"
    },
        correctAnswer: 'B. Cedric Benson'
    },
    {
        question: 'What is the name of the cannon fired at Longhorn home games?',
        answers: {
            A: "A. BEVO",
            B: "B. Big Bertha",
            C: "C. Smokey",
            D: "D. DKR"
    },
        correctAnswer: 'C. Smokey'
    },
    {
        question: 'What is the name of the song sung at the end of every Longhorn home game?',
        answers: {
            A: "A. Deep in the Heart of Texas",
            B: "B. Texas Fight!",
            C: "C. The National Anthem",
            D: "D. The Eyes of Texas"
    },
        correctAnswer: 'D. The Eyes of Texas'
    },
    {
        question: 'During his tenure at Texas, how many 10+ win season in a row did Mack Brown have?',
        answers: {
            A: "A. 9",
            B: "B. 11",
            C: "C. 5",
            D: "D. 2"
    },
        correctAnswer: 'A. 9'
    },
    {
        question: 'Before 2011, Texas had beaten this team more than they had beaten any other team.',
        answers: {
            A: "A. Texas A&M",
            B: "B. Baylor",
            C: "C. Okalahoma",
            D: "D. Texas Tech"
    },
        correctAnswer: 'A. Texas A&M'
    },
    {
        question: 'Texas has played and never beaten this team.',
        answers: {
            A: "A. Virginia Tech",
            B: "B. Syracuse",
            C: "C. Air Force",
            D: "D. all of the above"
    },
        correctAnswer: 'D. all of the above'
    },
    {
        question: 'What color jersey do the Longhonrs wear for home games?',
        answers: {
            A: "A. Burnt Orange",
            B: "B. Black",
            C: "C. Yellow",
            D: "D. Maroon"
    },
        correctAnswer: 'A. Burnt Orange'
    },
    {
        question: 'In 2017 after an overtime win against Texas, Oklahoma State head coach Mike Gundy said that this player almost beat them by himself.',
        answers: {
            A: "A. Sam Ehlinger",
            B: "B. Brandon Jones",
            C: "C. Breckyn Hager",
            D: "D. Michael Dickson"
    },
        correctAnswer: 'D. Michael Dickson'
    },
    {
        question: 'This Longhorn QB joins Colt McCoy as the only other Texas QB to thrown for 6 touchdowns in one game.',
        answers: {
            A: "A. Chris Simms",
            B: "B. James Brown",
            C: "C. Vince Young",
            D: "D. Casey Thompson"
    },
        correctAnswer: 'D. Casey Thompson'
    },
    {
        question: 'This Longhorn ranks 3rd all time in career receptions at Texas.',
        answers: {
            A: "A. Jordan Shipley",
            B: "B. Roy Williams",
            C: "C. Jaxon Shipley",
            D: "D. Quan Cosby"
    },
        correctAnswer: 'C. Jaxon Shipley'
    },
    {
        question: 'With 527 total yards, which Longhorn holds the single game total yards record?',
        answers: {
            A: "A. Jerrod Heard",
            B: "B. Vince Young",
            C: "C. Bjan Robinson",
            D: "D. D'Onta Foreman"
    },
        correctAnswer: 'A. Jerrod Heard'
    },
    {
        question: 'Which Longhorn is the career leader in field goals made?',
        answers: {
            A: "A. Cameron Dicker",
            B: "B. Phil Dawson",
            C: "C. Justin Tucker",
            D: "D. Dusty Mangum"
    },
        correctAnswer: 'A. Cameron Dicker'
    }
]

// timer function
startQuiz.addEventListener("click", function () { // timer function that fires on start quiz button click

    theTime.innerHTML = iniTime; // add 75 seconds to the clock on click
    console.log(iniTime);

    theCount = setInterval(function () { // countdown function. @ 0 will display a message else will display a count down
        iniTime = iniTime - 1;
        if (iniTime <= 0) {
            clearInterval(theCount); // will move out
            theTime.innerHTML = "Game Over";
        } else {
            theTime.innerHTML = iniTime;

        };
        // console.log("This is the initime: " + iniTime); // can I put my question array here? no because it will print it out every second


    }, 1000);
    myQuiz();
}); // add click event listener to button 

function myQuiz() {
    // setting up initial variables
    // // setting up initial variables
    var paraText = document.getElementsByClassName("para");
    var startBtn = document.getElementById("startQuiz");

    // removing items from the dom
    for (i = 0; i < 3; i++) {
        paraText[i].setAttribute("Style", "display: none;"); // how to setAttribute on all in array with one line?
    }
    startBtn.setAttribute("Style", "display: none;");

    var questionText = document.getElementById("questionText");
    var content = document.getElementById("content");
    var questionDiv = document.createElement("div");
    var choiceA = document.createElement("button");
    var choiceB = document.createElement("button");
    var choiceC = document.createElement("button");
    var choiceD = document.createElement("button");
    questionDiv.setAttribute("id", "questionDiv");
    choiceA.setAttribute("id", "choiceA");
    choiceB.setAttribute("id", "choiceB");
    choiceC.setAttribute("id", "choiceC");
    choiceD.setAttribute("id", "choiceD");

    questionDiv.append(choiceA, choiceB, choiceC, choiceD);
    content.appendChild(questionDiv);

    var randomQuestion = myQuestions[Math.floor(Math.random() * myQuestions.length)]; // gives one question 
    var start = myQuestions.indexOf(randomQuestion); // finds the index of the random question
    var deleteCount = 1; // the amount of entries to delete
    myQuestions.splice(start, deleteCount); // remove the random question from the question array so that it does not appear again during the quiz

    questionText.textContent = randomQuestion.question;
    choiceA.textContent = randomQuestion.answers.A;
    choiceB.textContent = randomQuestion.answers.B;
    choiceC.textContent = randomQuestion.answers.C;
    choiceD.textContent = randomQuestion.answers.D;

    // first question
    choiceA.addEventListener("click", function () {
        console.log("good job choice a");
        // questionText.textContent = "";
        
        choiceA.setAttribute("value", randomQuestion.answers.A);
        choiceB.setAttribute("value", randomQuestion.answers.B);
        choiceC.setAttribute("value", randomQuestion.answers.C);
        choiceD.setAttribute("value", randomQuestion.answers.D);

        if (this.value !== randomQuestion.correctAnswer) {
            iniTime -= 9;
            feedBack.setAttribute("style", "display:initial;");
            questionDiv.append(feedBack);
            feedBack.textContent = "horns down";

        } else {
            score++;
            feedBack.setAttribute("style", "display:initial;");
            questionDiv.append(feedBack);
            feedBack.textContent = "hook 'em!";
        } 
        
        setTimeout(function () {
            choiceA.setAttribute("style", "display:none;");
            choiceB.setAttribute("style", "display:none;");
            choiceC.setAttribute("style", "display:none;");
            choiceD.setAttribute("style", "display:none;");
            feedBack.setAttribute("style", "display:none");
            if (myQuestions.length === 0 ) {
                endGame();
            } else {
                myQuiz();
            }
        }, 1000); 
    });

    choiceB.addEventListener("click", function () {
        console.log("good job choice a");
        // questionText.textContent = "";
        
        choiceA.setAttribute("value", randomQuestion.answers.A);
        choiceB.setAttribute("value", randomQuestion.answers.B);
        choiceC.setAttribute("value", randomQuestion.answers.C);
        choiceD.setAttribute("value", randomQuestion.answers.D);

        if (this.value !== randomQuestion.correctAnswer) {
            iniTime -= 9;
            feedBack.setAttribute("style", "display:initial;");
            questionDiv.append(feedBack);
            feedBack.textContent = "horns down";

        } else {
            score++;
            feedBack.setAttribute("style", "display:initial;");
            questionDiv.append(feedBack);
            feedBack.textContent = "hook 'em!";
        } 
        
        setTimeout(function () {
            choiceA.setAttribute("style", "display:none;");
            choiceB.setAttribute("style", "display:none;");
            choiceC.setAttribute("style", "display:none;");
            choiceD.setAttribute("style", "display:none;");
            feedBack.setAttribute("style", "display:none");
            if (myQuestions.length === 0 ) {
                endGame();
            } else {
                myQuiz();
            }
        }, 1000); 
    });

    choiceC.addEventListener("click", function () {
        console.log("good job choice a");
        // questionText.textContent = "";
        
        choiceA.setAttribute("value", randomQuestion.answers.A);
        choiceB.setAttribute("value", randomQuestion.answers.B);
        choiceC.setAttribute("value", randomQuestion.answers.C);
        choiceD.setAttribute("value", randomQuestion.answers.D);

        if (this.value !== randomQuestion.correctAnswer) {
            iniTime -= 9;
            feedBack.setAttribute("style", "display:initial;");
            questionDiv.append(feedBack);
            feedBack.textContent = "horns down";

        } else {
            score++;
            feedBack.setAttribute("style", "display:initial;");
            questionDiv.append(feedBack);
            feedBack.textContent = "hook 'em!";
        } 
        
        setTimeout(function () {
            choiceA.setAttribute("style", "display:none;");
            choiceB.setAttribute("style", "display:none;");
            choiceC.setAttribute("style", "display:none;");
            choiceD.setAttribute("style", "display:none;");
            feedBack.setAttribute("style", "display:none");
            if (myQuestions.length === 0 ) {
                endGame();
            } else {
                myQuiz();
            }
        }, 1000); 
    });

    choiceD.addEventListener("click", function () {
        console.log("good job choice a");
        // questionText.textContent = "";
        
        choiceA.setAttribute("value", randomQuestion.answers.A);
        choiceB.setAttribute("value", randomQuestion.answers.B);
        choiceC.setAttribute("value", randomQuestion.answers.C);
        choiceD.setAttribute("value", randomQuestion.answers.D);

        if (this.value !== randomQuestion.correctAnswer) {
            iniTime -= 9;
            feedBack.setAttribute("style", "display:initial;");
            questionDiv.append(feedBack);
            feedBack.textContent = "horns down";

        } else {
            score++;
            feedBack.setAttribute("style", "display:initial;");
            questionDiv.append(feedBack);
            feedBack.textContent = "hook 'em!";
        } 
        
        setTimeout(function () {
            choiceA.setAttribute("style", "display:none;");
            choiceB.setAttribute("style", "display:none;");
            choiceC.setAttribute("style", "display:none;");
            choiceD.setAttribute("style", "display:none;");
            feedBack.setAttribute("style", "display:none");
            if (myQuestions.length === 0 ) {
                endGame();
            } else {
                myQuiz();
            }
        }, 1000); 
    });
}

// need to re-traverse the dom here.... then I can do other click listeners and if statements based on those 
// choiceA = document.getElementById("choiceA");


function endGame() {
    questionText.textContent = 'All done';
    // paraText[0].setAttribute("Style", "display: initial;"); // how to setAttribute on all in array with one line?
    // paraText[0].innerHTML = "Your final score is "; // + time left on clock
    var endDiv = document.getElementById("endDiv");
    endDiv.setAttribute("Style", "display:flex;");
    var finalScore = document.getElementById('finalScore');
    
    
    finalScore.innerHTML = score * 1 + iniTime;
    // choiceA.setAttribute("Style", "display:none;");
    // choiceB.setAttribute("Style", "display:none;");
    // choiceC.setAttribute("Style", "display:none;");
    // choiceD.setAttribute("Style", "display:none;");
}

var buttons = document.getElementsByTagName('button')


// how to log which answer is correct? // local storage?




// the last question causes an error and does not bring up the all done screen even though length is === 0

// watch video tutorial on creating a quiz
// look at mini project walk through

// need to produce a score and show it at the end
// need to log score into localstorage 
// need to print what is in localstorage on the end page
// need to enbable a submit and record the name and retieve from local storage
// can use video and demo from other to help... 