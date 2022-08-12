// keep track of record... create var to keep track of win loss or tie
// user choice as varablies
// increment var 
// Math.random
// let myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 
// 'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

// let randomValue = myShows[Math.floor(Math.random() * myShows.length)];
// console.log(randomValue);







var wins      = 0;
var losses    = 0;
var ties      = 0;
var playerOne = ['r', 'p', 's'];

var playGame  = function() {
  var myPrompt = prompt("Welcome to our game of Rock Paper Scissors! Use " + playerOne[0] + " for Rock, " + playerOne[1] + " for paper or " + playerOne[2] + " for scissors.");

  if(!myPrompt) {
    return;
  }
      myPrompt   = myPrompt.toLowerCase();
  var randomPick = playerOne[Math.floor(Math.random() * playerOne.length)];
 
  if(randomPick === myPrompt) {
    ties++;
    alert("You tied with the computer"); 
  } else if(
    (myPrompt === 'r' && randomPick === 's' ) ||
    (myPrompt === 'p' && randomPick === 'r' ) ||
    (myPrompt === 's' && randomPick === 'p' )
  ) {
    wins++;
    alert("The computer chose " + randomPick + ", you win!");
  } else {
    losses++;
    alert("The computer chose " + randomPick + ", you lost!");
  }
  alert('ties: ' + ties + '\nwins: ' + '\nlosses' + losses);

  var playAgain = confirm("Do you want to play again?");

  if(playAgain) {
    playGame();
  }
}

playGame();






// if (myPrompt === 'R' || myPrompt === 'r') {
//   var theResult = confirm("You picked " + myPrompt + " , thanks.");
  
// console.log(randomPick);
//  var cpuPick    = confirm("The CPU picked " + randomPick + ", cool.")
//   var tryAgain = alert("Try again");
// } else if (myPrompt === 'P' || myPrompt === 'p') {
//   var theResult = confirm("You picked " + myPrompt + " , thanks.");
//   var tryAgain = alert("Try again");
// } else if (myPrompt === 'S' || myPrompt === 's') {
//   var theResult = confirm("You picked " + myPrompt + " , thanks.");
//   var tryAgain = alert("Try again")
// }

// var randomPick = playerOne[Math.floor(Math.random() * playerOne.length)];
// console.log(randomPick);



// var myAlert = alert("Welcome to our game of Rock Paper Scissors! Use " + playerOne[0] + " for Rock, " + playerOne[1] + " for paper or " + playerOne[2] + " for scissors.");
// console.log(myAlert);



