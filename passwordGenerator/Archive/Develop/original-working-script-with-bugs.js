// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {
    
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
          lowerPrompt();
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
          upperPrompt();
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
           alert('Stop failing.');
           numericPrompt();
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
           alert('Stop failing.');
           specialCharactersPrompt();
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

    var madeTheCut = myLowerLetterArray.concat(myUpperLetterArray);
    console.log("made the cut " + madeTheCut);
    madeTheCut = madeTheCut.concat(myNumericArray);
    console.log("made the cut " + madeTheCut);
    madeTheCut = madeTheCut.concat(mySpecialCharacterArray);
    console.log("made the cut " + madeTheCut);

   // randomly select a character from the new madeTheCut array up to and equal to the number of characters user selected

   var finalCharactersArray = [];
   console.log("evidence of a new and empty final character array " + finalCharactersArray.length);

   function randomFinalCharacters() {
    var theCharacters = madeTheCut[Math.floor(Math.random() * passwordLength)]; // gives one character
    finalCharactersArray.push(theCharacters);
    console.log(finalCharactersArray);

    return finalCharactersArray;
   };

    var myFinalCharactersArray = randomFinalCharacters(); // array with all the characters letters 

        console.log(myFinalCharactersArray.length);

        while (myFinalCharactersArray.length <= passwordLength-1) {
          randomFinalCharacters();
        };

        console.log("length after while loop: " + myFinalCharactersArray.length);

       console.log("is this the final aaray? : " + myFinalCharactersArray);
      return myFinalCharactersArray.join(' '); // returning the characters from the array as the password
  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//bugs

// app works now but does not always include all the types of required characaters
// need to figure out a way to get it include at least 1 of each character required

// selecting no the entire time causes a typeError

// stuck in loop if don't answer correctly at one point

// need to test each scenerio 