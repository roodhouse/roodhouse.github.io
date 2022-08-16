// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {

    document.querySelector("#password").setAttribute("style", "background: hsl(0, 0%, 100%); color:hsl(206, 17%, 28%);"); // reset the background and color to initial values
    
    // length section
      var passwordLength = 8;
      console.log(passwordLength);
      console.log(typeof passwordLength);
      var lengthPrompt = prompt("Enter a length between 8 and 128 characters");
      if(lengthPrompt >= 8 && lengthPrompt <= 128) {
        alert('Thank you for obeying');
        console.log(lengthPrompt);
        passwordLength = Number(lengthPrompt);
      } else {
        alert('Don\'t be salty.');
        console.log(lengthPrompt);
      };
     // end length section

     // character types section
     
     var lowerCase;
     var upperCase;
     var numeric;
     var specialCharacters;
     var userNumberOfVariables = 0;
     console.log(userNumberOfVariables);
     
     // lowercase 
     console.log(lowerCase); // testing variable value 
     console.log(typeof lowerCase); // test that variable is undefined type 
      function lowerPrompt() {
        var userInput = prompt("Would you like to use lowercase letters (y or n)?");
        if(userInput === 'y' || userInput === 'yes' || userInput === 'Y' || userInput === 'YES') {
            console.log(userInput);
            lowerCase = true; // set variable lowercase to true
            console.log(lowerCase); // confirming variable value has changed to true
            console.log(typeof lowerCase); // confirming variable type is now boolean
            userNumberOfVariables++;
            console.log(userNumberOfVariables);
        } 
        else if(userInput === 'n' || userInput === 'no' || userInput === 'N' || userInput === 'NO') {
          console.log(userInput);
          lowerCase = false; // set variable lowercase to true
          console.log(lowerCase); // confirming variable value has changed to true
          console.log(typeof lowerCase); // confirming variable type is now boolean
        }
        else {
          console.log('Failed instructions');
          alert('Please obey');
          lowerCase = false;
        }
      }
      lowerPrompt();

     // uppercase 
     console.log(upperCase); // testing variable value 
     console.log(typeof upperCase); // test that variable is undefined type 
      function upperPrompt() {
        var userInput = prompt("Would you like to use uppercase letters (y or n)?");
        if(userInput === 'y' || userInput === 'yes' || userInput === 'Y' || userInput === 'YES') {
            console.log(userInput);
            upperCase = true; // set variable lowercase to true
            console.log(upperCase); // confirming variable value has changed to true
            console.log(typeof upperCase); // confirming variable type is now boolean
            userNumberOfVariables++;
            console.log(userNumberOfVariables);
        } 
        else if(userInput === 'n' || userInput === 'no' || userInput === 'N' || userInput === 'NO') {
          console.log(userInput);
          upperCase = false; // set variable lowercase to true
          console.log(upperCase); // confirming variable value has changed to true
          console.log(typeof upperCase); // confirming variable type is now boolean
        }
        else {
          console.log('Failed instructions');
          alert('Stop failing.');
          upperCase = false;
        }
      }
      upperPrompt();

      // numeric
      console.log(numeric); // testing variable value 
      console.log(typeof numeric); // test that variable is undefined type 
       function numericPrompt() {
         var userInput = prompt("Would you like to use numbers (y or n)?");
         if(userInput === 'y' || userInput === 'yes' || userInput === 'Y' || userInput === 'YES') {
             console.log(userInput);
             numeric = true; // set variable lowercase to true
             console.log(numeric); // confirming variable value has changed to true
             console.log(typeof numeric); // confirming variable type is now boolean
             userNumberOfVariables++;
            console.log(userNumberOfVariables);
         } 
         else if(userInput === 'n' || userInput === 'no' || userInput === 'N' || userInput === 'NO') {
           console.log(userInput);
           numeric = false; // set variable lowercase to true
           console.log(numeric); // confirming variable value has changed to true
           console.log(typeof numeric); // confirming variable type is now boolean
         }
         else {
           console.log('Failed instructions');
           alert('wow. fail.');
           numeric = false;
         }
       }
       numericPrompt();  

       // special characters
      console.log(specialCharacters); // testing variable value 
      console.log(typeof specialCharacters); // test that variable is undefined type 
       function specialCharactersPrompt() {
         var userInput = prompt("Would you like to use special characters (y or n)?");
         if(userInput === 'y' || userInput === 'yes' || userInput === 'Y' || userInput === 'YES') {
             console.log(userInput);
             specialCharacters = true; // set variable lowercase to true
             console.log(specialCharacters); // confirming variable value has changed to true
             console.log(typeof specialCharacters); // confirming variable type is now boolean
             userNumberOfVariables++;
            console.log(userNumberOfVariables);
         } 
         else if(userInput === 'n' || userInput === 'no' || userInput === 'N' || userInput === 'NO') {
           console.log(userInput);
           specialCharacters = false; // set variable lowercase to true
           console.log(specialCharacters); // confirming variable value has changed to true
           console.log(typeof specialCharacters); // confirming variable type is now boolean
         }
         else {
           console.log('Failed instructions');
           alert('You were not cluch. Fail.');
           specialCharacters = false;
         }
       }
       specialCharactersPrompt(); 

     // end character types section


     // recording new variables values to the console
     console.log('User wants a password that is ' + passwordLength + ' characters long.');
     console.log('Lowercase: ' + lowerCase);
     console.log('Uppercase: ' + upperCase);
     console.log('Numeric: ' + numeric);
     console.log('Special Characters: ' + specialCharacters);
     console.log(userNumberOfVariables);

    var amtOfCharactersPerType = passwordLength / userNumberOfVariables;
    console.log("This is the first amount of characters per type: " + amtOfCharactersPerType); 

    // randomly select amtOfCharactersPerType from each variable selected by user

    // lowercase selection

    if (lowerCase == true ) { // randomly select amtOfCharactersPerType from lowercase letters a-z 
      

      var lowerLetterArray = [];  //
      console.log("evidence of a new and empty array " + lowerLetterArray.length);      

        function randomLowerLetter() { 

          var lowerLetters = [
            'a', 'b', 'c', 'd', 'e',
            'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y',
            'z'];

            var oneLetter = lowerLetters[Math.floor(Math.random() * 25)]; // gives one letter
            lowerLetterArray.push(oneLetter);
          console.log(lowerLetterArray);
              
          return lowerLetterArray;
          
        };

        var myLowerLetterArray = randomLowerLetter(); // array with all the lowercase letters 

        console.log(myLowerLetterArray.length);

        while (myLowerLetterArray.length <= amtOfCharactersPerType) {
          randomLowerLetter();
        }

        console.log("length after while loop: " + myLowerLetterArray.length);
        
      
    }

    console.log(myLowerLetterArray);

    // uppercase selection

    if (upperCase == true ) { // randomly select amtOfCharactersPerType from upperrcase letters a-z 
    
      var upperLetterArray = [];  //
      console.log("evidence of a new and empty array " + upperLetterArray.length);      

        function randomUpperLetter() { 

          var upperLetters = [
            'A', 'B', 'C', 'D', 'E',
            'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O',
            'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y',
            'Z'];

            var oneLetter = upperLetters[Math.floor(Math.random() * 25)]; // gives one letter
            upperLetterArray.push(oneLetter);
          console.log(upperLetterArray);
              
          return upperLetterArray;
          
        };

        var myUpperLetterArray = randomUpperLetter(); // array with all the uppercase letters 

        console.log(myUpperLetterArray.length);

        while (myUpperLetterArray.length <= amtOfCharactersPerType) {
          randomUpperLetter();
        }

        console.log("length after while loop: " + myUpperLetterArray.length);
        
      
    }

    console.log(myUpperLetterArray);

      // numeric selection

    if (numeric == true ) { // randomly select amtOfCharactersPerType from upperrcase letters a-z 
    
      var numericArray = [];  //
      console.log("evidence of a new and empty array " + numericArray.length);      

        function randomNumeric() { 

          var numericList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            var oneNumeral = numericList[Math.floor(Math.random() * 10)]; // gives one letter
            numericArray.push(oneNumeral);
          console.log(numericArray);
              
          return numericArray;
          
        };

        var myNumericArray = randomNumeric(); // array with all the uppercase letters 

        console.log(myNumericArray.length);

        while (myNumericArray.length <= amtOfCharactersPerType) {
          randomNumeric();
        }

        console.log("length after while loop: " + myNumericArray.length);
        
      
    }

    console.log(myNumericArray);
      
    // special character selection

    if (specialCharacters == true ) { // randomly select amtOfCharactersPerType from specialCharacters
    
      var specialCharactersArray = [];  //
      console.log("evidence of a new and empty array " + specialCharactersArray.length);      

        function randomSpecialCharacter() { 

          var specialCharactersList = [
            '~', '!', '@', '#', '$',
            '%', '^', '&', '*', '®'];

            var oneCharacter = specialCharactersList[Math.floor(Math.random() * 10)]; // gives one character
            specialCharactersArray.push(oneCharacter);
          console.log(specialCharactersArray);
              
          return specialCharactersArray;
          
        };

        var mySpecialCharacterArray = randomSpecialCharacter(); // array with all the special characters letters 

        console.log(mySpecialCharacterArray.length);

        while (mySpecialCharacterArray.length <= amtOfCharactersPerType) {
          randomSpecialCharacter();
        }

        console.log("length after while loop: " + mySpecialCharacterArray.length);
        
      
    };

    console.log(mySpecialCharacterArray);


    // combine my 4 arrays

    // var madeTheCut = myLowerLetterArray.concat(myUpperLetterArray);
    // console.log("made the cut " + madeTheCut);
    // madeTheCut = madeTheCut.concat(myNumericArray);
    // console.log("made the cut " + madeTheCut);
    // madeTheCut = madeTheCut.concat(mySpecialCharacterArray);
    // console.log("made the cut " + madeTheCut);

    // If user selects all types of characters 
   
    if (lowerCase == true && upperCase == true && numeric == true && specialCharacters == true) {
      console.log("they are all true!");
    
    
    // iterate over each variable until the password length has been reached
    
    var loopCharacterCount = [];
    
    
    for(i = 0; i <= passwordLength; i++) {

      if (passwordLength !== loopCharacterCount.length ) {
        var lowerLoop = myLowerLetterArray[Math.floor(Math.random() * myLowerLetterArray.length)];
            loopCharacterCount.push(lowerLoop);
          if (passwordLength !== loopCharacterCount.length) {
            var upperLoop = myUpperLetterArray[Math.floor(Math.random() * myUpperLetterArray.length)];
                loopCharacterCount.push(upperLoop);
            if (passwordLength !== loopCharacterCount.length) {
              var numericLoop = myNumericArray[Math.floor(Math.random() * myNumericArray.length)];
                  loopCharacterCount.push(numericLoop);
             if (passwordLength !== loopCharacterCount.length) {
              var specialLoop = mySpecialCharacterArray[Math.floor(Math.random() * mySpecialCharacterArray.length)];
        loopCharacterCount.push(specialLoop);
            }
          }
      }
    }
    }

  } 
  
  // if lower upper numeric are true
    else if (lowerCase == true && upperCase == true && numeric == true) { 
      console.log("lower upper numeric are all true!");
  
  
  // iterate over each variable until the password length has been reached
  
  var loopCharacterCount = [];
  
  
  for(i = 0; i <= passwordLength; i++) {

    if (passwordLength !== loopCharacterCount.length ) {
      var lowerLoop = myLowerLetterArray[Math.floor(Math.random() * myLowerLetterArray.length)];
          loopCharacterCount.push(lowerLoop);
        if (passwordLength !== loopCharacterCount.length) {
          var upperLoop = myUpperLetterArray[Math.floor(Math.random() * myUpperLetterArray.length)];
              loopCharacterCount.push(upperLoop);
          if (passwordLength !== loopCharacterCount.length) {
            var numericLoop = myNumericArray[Math.floor(Math.random() * myNumericArray.length)];
                loopCharacterCount.push(numericLoop);
        }
    }
  }
  }
}
    // If lower upper special are true
    
  else if (lowerCase == true && upperCase == true && specialCharacters == true) {
    console.log("lower upper special are all true!");


  // iterate over each variable until the password length has been reached

  var loopCharacterCount = [];


  for(i = 0; i <= passwordLength; i++) {

    if (passwordLength !== loopCharacterCount.length ) {
      var lowerLoop = myLowerLetterArray[Math.floor(Math.random() * myLowerLetterArray.length)];
          loopCharacterCount.push(lowerLoop);
        if (passwordLength !== loopCharacterCount.length) {
          var upperLoop = myUpperLetterArray[Math.floor(Math.random() * myUpperLetterArray.length)];
              loopCharacterCount.push(upperLoop);
          if (passwordLength !== loopCharacterCount.length) {
            var specialLoop = mySpecialCharacterArray[Math.floor(Math.random() * mySpecialCharacterArray.length)];
      loopCharacterCount.push(specialLoop);
        }
    }
  }
  }
}

// If lower numeric special are true
   
else if (lowerCase == true && numeric == true && specialCharacters == true) {
  console.log("lower numeric special are all true!");


// iterate over each variable until the password length has been reached

var loopCharacterCount = [];


for(i = 0; i <= passwordLength; i++) {

  if (passwordLength !== loopCharacterCount.length ) {
    var lowerLoop = myLowerLetterArray[Math.floor(Math.random() * myLowerLetterArray.length)];
        loopCharacterCount.push(lowerLoop);
        if (passwordLength !== loopCharacterCount.length) {
          var numericLoop = myNumericArray[Math.floor(Math.random() * myNumericArray.length)];
              loopCharacterCount.push(numericLoop);
         if (passwordLength !== loopCharacterCount.length) {
          var specialLoop = mySpecialCharacterArray[Math.floor(Math.random() * mySpecialCharacterArray.length)];
    loopCharacterCount.push(specialLoop);
        }
      }
  }
}
}

// If upper numeric special are true
   
else if (upperCase == true && numeric == true && specialCharacters == true) {
  console.log("upper numeric special are true!");

// iterate over each variable until the password length has been reached

var loopCharacterCount = [];

for(i = 0; i <= passwordLength; i++) {

      if (passwordLength !== loopCharacterCount.length) {
        var upperLoop = myUpperLetterArray[Math.floor(Math.random() * myUpperLetterArray.length)];
            loopCharacterCount.push(upperLoop);
        if (passwordLength !== loopCharacterCount.length) {
          var numericLoop = myNumericArray[Math.floor(Math.random() * myNumericArray.length)];
              loopCharacterCount.push(numericLoop);
         if (passwordLength !== loopCharacterCount.length) {
          var specialLoop = mySpecialCharacterArray[Math.floor(Math.random() * mySpecialCharacterArray.length)];
    loopCharacterCount.push(specialLoop);
        }
      }
  }
}
}

// If lower upper are true
   
else if (lowerCase == true && upperCase == true) {
  console.log("lower upper are true!");


// iterate over each variable until the password length has been reached

var loopCharacterCount = [];


for(i = 0; i <= passwordLength; i++) {

  if (passwordLength !== loopCharacterCount.length ) {
    var lowerLoop = myLowerLetterArray[Math.floor(Math.random() * myLowerLetterArray.length)];
        loopCharacterCount.push(lowerLoop);
      if (passwordLength !== loopCharacterCount.length) {
        var upperLoop = myUpperLetterArray[Math.floor(Math.random() * myUpperLetterArray.length)];
            loopCharacterCount.push(upperLoop);
          }
        }
      }
    }

    // If user selects lower numeric
   
    else if (lowerCase == true && numeric == true) {
      console.log("lower numeric are true!");
    
    
    // iterate over each variable until the password length has been reached
    
    var loopCharacterCount = [];
    
    
    for(i = 0; i <= passwordLength; i++) {

    if (passwordLength !== loopCharacterCount.length ) {
      var lowerLoop = myLowerLetterArray[Math.floor(Math.random() * myLowerLetterArray.length)];
        loopCharacterCount.push(lowerLoop);
          if (passwordLength !== loopCharacterCount.length) {
            var numericLoop = myNumericArray[Math.floor(Math.random() * myNumericArray.length)];
              loopCharacterCount.push(numericLoop);
            }
          }
        }
      }

      // If user selects lower special
   
    else if (lowerCase == true && specialCharacters == true) {
      console.log("lower special are true!");
    
    
    // iterate over each variable until the password length has been reached
    
    var loopCharacterCount = [];
    
    
    for(i = 0; i <= passwordLength; i++) {

      if (passwordLength !== loopCharacterCount.length ) {
        var lowerLoop = myLowerLetterArray[Math.floor(Math.random() * myLowerLetterArray.length)];
            loopCharacterCount.push(lowerLoop);
             if (passwordLength !== loopCharacterCount.length) {
              var specialLoop = mySpecialCharacterArray[Math.floor(Math.random() * mySpecialCharacterArray.length)];
                loopCharacterCount.push(specialLoop);
              }
            }
          }
        }

        // If user selects upper numeric
   
            else if (upperCase == true && numeric == true) {
              console.log("upper numeric are true!");

              // iterate over each variable until the password length has been reached

              var loopCharacterCount = [];

              for(i = 0; i <= passwordLength; i++) {

                if (passwordLength !== loopCharacterCount.length) {
                  var upperLoop = myUpperLetterArray[Math.floor(Math.random() * myUpperLetterArray.length)];
                  loopCharacterCount.push(upperLoop);
                if (passwordLength !== loopCharacterCount.length) {
                  var numericLoop = myNumericArray[Math.floor(Math.random() * myNumericArray.length)];
                  loopCharacterCount.push(numericLoop);
                }
              }
            }
          } // end myif

        // If user selects upper special
   
        else if (upperCase == true && specialCharacters == true) {
          console.log("upper special are true!");

          // iterate over each variable until the password length has been reached

          var loopCharacterCount = [];

          for(i = 0; i <= passwordLength; i++) {

            if (passwordLength !== loopCharacterCount.length) {
              var upperLoop = myUpperLetterArray[Math.floor(Math.random() * myUpperLetterArray.length)];
              loopCharacterCount.push(upperLoop);
            if (passwordLength !== loopCharacterCount.length) {
              var specialLoop = mySpecialCharacterArray[Math.floor(Math.random() * mySpecialCharacterArray.length)];
              loopCharacterCount.push(specialLoop);
            }
          }
        }
      } // end myif

        // If user selects numeric special
   
        else if (numeric == true && specialCharacters == true) {
          console.log("numeric special are true!");

          // iterate over each variable until the password length has been reached

          var loopCharacterCount = [];

          for(i = 0; i <= passwordLength; i++) {

            if (passwordLength !== loopCharacterCount.length) {
              var numericLoop = myNumericArray[Math.floor(Math.random() * myNumericArray.length)];
              loopCharacterCount.push(numericLoop);
            if (passwordLength !== loopCharacterCount.length) {
              var specialLoop = mySpecialCharacterArray[Math.floor(Math.random() * mySpecialCharacterArray.length)];
              loopCharacterCount.push(specialLoop);
            }
          }
        }
      } // end myif

        // If user selects lower
   
        else if (lowerCase == true) {
          console.log("lower is true!");

          // iterate over each variable until the password length has been reached

          var loopCharacterCount = [];

          for(i = 0; i <= passwordLength; i++) {

            if (passwordLength !== loopCharacterCount.length ) {
              var lowerLoop = myLowerLetterArray[Math.floor(Math.random() * myLowerLetterArray.length)];
              loopCharacterCount.push(lowerLoop);
            }
          }
        } // end myif

        // If user selects upper
   
        else if (upperCase == true) {
          console.log("upper is true!");

          // iterate over each variable until the password length has been reached

          var loopCharacterCount = [];

          for(i = 0; i <= passwordLength; i++) {

            if (passwordLength !== loopCharacterCount.length) {
              var upperLoop = myUpperLetterArray[Math.floor(Math.random() * myUpperLetterArray.length)];
              loopCharacterCount.push(upperLoop);
            }
          }
        } // end myif

        // If user selects numeric
   
        else if (numeric == true) {
          console.log("numeric is true!");

          // iterate over each variable until the password length has been reached

          var loopCharacterCount = [];

          for(i = 0; i <= passwordLength; i++) {

            
            if (passwordLength !== loopCharacterCount.length) {
              var numericLoop = myNumericArray[Math.floor(Math.random() * myNumericArray.length)];
              loopCharacterCount.push(numericLoop);
            }
          }
        } // end myif

        // If user selects special
   
        else if (specialCharacters == true) {
          console.log("special is true!");

          // iterate over each variable until the password length has been reached

          var loopCharacterCount = [];

          for(i = 0; i <= passwordLength; i++) {

            if (passwordLength !== loopCharacterCount.length) {
              var specialLoop = mySpecialCharacterArray[Math.floor(Math.random() * mySpecialCharacterArray.length)];
              loopCharacterCount.push(specialLoop);
            }
          }
        } // end myif

        // If user selects no or the wrong character every time
   
        else {
          console.log("they are all false!");
          loopCharacterCount = ["Your password is very weak"]
          document.querySelector("#password").setAttribute("style", "background:#af0808; color:white;");
        }; // end myif

    console.log("before fisher loop: " + loopCharacterCount);
    // Fisher-Yates shuffle function (used to shuffle the array)

    var shuffleArray = function shuffle(array) {
      for (let i = array.length - 1; i > 0; i-- ) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(loopCharacterCount);

    console.log("after fisher loop: " + loopCharacterCount);
    
     return loopCharacterCount.join(' '); // returning the characters from the array as the password
  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if (password !== "Your password is very weak") {
    console.log("not a weak password");

    var copyButton = document.createElement("button");
    copyButton.textContent = "Copy to clipboard";
    copyButton.classList.add("btn");
    copyButton.classList.add("newBtn");
    buttonParent = document.getElementById("card-footer");
    console.log(buttonParent);
    buttonParent.appendChild(copyButton); 
    
    var copyButtonClick = document.querySelector(".newBtn");
    console.log(copyButtonClick);

    // copy the new password to the clipboard 
    // credit w3 tutorials
    function copyFunction() {

      var copyText = document.getElementById("password");

      copyText.select();
      copyText.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(copyText.value);

      console.log("this is the copied value: " + copyText.value);

    }
    copyButtonClick.addEventListener("click", copyFunction);
  };

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// need to create site and do github stuff
// refactor code above
// readme explaining code 