// // while loop
// var age = 5;
// while (age < 10) {
//   console.log('less than 10');
//   age++; //increment the age so it eventually ends up false
// }
// document.write('you are now over 10');

// for loop
// for (age = 5; age < 10; age++) {
//   console.log('less than 10');
// }
// document.write('you are now over 10');

// var links = document.getElementsByTagName("a");

// for (i = 1; i < links.length; i++) {
//   console.log('this is link number' + i);
// }

// document.write('all links now looped');

// for loop with break
// for (i = 0; i < 10; i++) {
//   console.log(i);

//   if(i === 7 ) {
//     break;
//   }
// }

// console.log('i broke out');

// for loop with break & continue
// for (i = 0; i < 10; i++) {

//   if(i === 5 || i === 3) {
//     continue;
//   }
//   console.log(i);

//   if(i === 7 ) {
//     break;
//   }
// }

// console.log('i broke out');

// for loop that goes through a series of links and gives them incrementing class names
// var links = document.getElementsByTagName("a");

// for(i = 0; i < links.length; i++ ) {
//   links[i].className = "link-" + i;
// }

// //functions 
// function getAverage (a,b) {

//   var average = (a + b) / 2; // local variable
//   console.log(average);
//   return average;

// }

// var myResult = getAverage(8,12); // global variable

// function logAndWriteResult() {
//   console.log('the average is ' + myResult);
//   document.write('<br><h1>the average is ' + myResult + '</h1>');
// }
// logAndWriteResult();

// working with numbers

// var a = 5; 
// var b = 5; 

// console.log(a+b);

// console.log(Math.round(7.4));
// console.log(Math.floor(7.4));
// console.log(Math.ceil(7.4));
// console.log(Math.max(7,6,7,4,3,9));
// console.log(Math.PI);

// NaN

// var a = "apple";
// var b = 5;

// if (isNaN(a) && isNaN(b)) {
// console.log('it is not a number, but it thick30 anyway.')
// } else {
//   console.log('the meaning of life is ' + (a * b));
//   document.write('the meaning of life is ' + (a * b));
// }

// Strings

// var myString         = "I am a string";
// // var failString    = "I am a "fun" string";
// var funString        = 'I am a "fun" string';
// var escapeString     = 'I\'m a "fun" string';

// console.log(myString.length); // property of myString
// console.log(myString.toUpperCase()); // method of myString
// console.log(myString.toLowerCase()); // method of myString
// console.log(myString.indexOf("string")); // method of myString
// console.log(myString.indexOf("ninja")); // method of myString w/ -1 result

// if (myString.indexOf("ninja") === -1) {
//   document.write('<h1 style="color:orange">Got \'em</h1><p>Ha!</p>');
// }

// var string1 = "abc";
// var string2 = "ABC"; 


// // console.log(string1 === string2); false
// console.log(string1.toLowerCase() === string2.toLowerCase());

// var string1 = "abc";
// var string2 = "bcd"; 


// // console.log(string1 === string2); false
// console.log(string1 <  string2);

// spiliting and splicing strings

// var str = "hellow world";
// document.write(str);
// var str2 = str.slice(2,9);
// document.write('<br>' + str2);
// var str3 = str.slice(2);
// document.write('<br>' + str3);

// var tags = "meat, ham, beef, chicken";
// var tagsArray = tags.split(",");
// document.write('<br>'+ tags); 

// arrays

// var myArray = [];

// myArray[0] = 25;
// myArray[1] = 2;
// document.write(myArray[0]/myArray[1]);
// myArray[2] = true;
// myArray[3] = "hey";

// document.write('<br>' + myArray);

// var myArray2 = [35, 14, false, 'see-ya'];

// console.log(myArray.length);

// objects

// car = Object
// each car has several similar properties that have different values, color = red, or color = orange, rims = spin or rims = no spin
// each car has several functions it can also do, play radio, drive, reverse etc

// var myString = new String();
// myString = "hello";
// var test = myString.toUpperCase();
// document.write(test);

// var myCar = new Object();
// myCar.maxSpeed = 50;
// myCar.driver = 'John';
// console.log(myCar.driver);
// myCar.drive = function(){console.log('we are driving');};
// myCar.drive();

// var myCar2 = {
//         maxSpeed: 50, 
//         driver:'Me',
//         drive: function(){console.log('we are driving the other car');
//       }
//        };
// myCar2.drive();

// var myCar = new Object();
// myCar.maxSpeed = 50;
// myCar.driver = 'John';
// console.log(myCar.driver);
// myCar.drive = function(){console.log('we are driving');};
// myCar.drive();

// var myCar2 = {
//         maxSpeed: 50, 
//         driver:'Me',
//         drive: function(speed, time){
//           console.log(speed * time);
//       }
//        };
// myCar2.drive(50, 3);

// the 'this' keyword

// var myCar2 = {
//         maxSpeed: 50, 
//         driver:'Me',
//         drive: function(speed, time){
//           console.log(speed * time);
//       },
//       logDriver: function() {
//         console.log("driver name is " + this.driver);
//       }
//        };
// myCar2.logDriver();
// myCar2.drive(50, 3);

// constructor function

// var Car = function(maxSpeed, driver){

//   this.maxSpeed = maxSpeed;
//   this.driver   = driver;
//   this.drive    = function(speed, time){
//     console.log(speed * time);
//   };
//   this.logDriver = function(){
//     console.log("driver name is " + this.driver);
//   };
// }

// var myCar = new Car (70, 'John');
// var myCar2 = new Car (70, 'Laura');
// var myCar3 = new Car (20, 'Rachel');
// var myCar4= new Car (15, 'Alyson');
// var myCar5= new Car (10, 'Emily');
// var myCar4= new Car (3, 'Caroline');

// myCar.drive(30,5);
// myCar3.logDriver();

// date object

var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1543, 11, 2);
console.log(myPastDate);

var myFutureDate = new Date(2043, 11, 2);
console.log(myFutureDate);

var myFutureExpandedDate = new Date(2043, 11, 2, 10, 30, 15);
console.log(myFutureExpandedDate);