var add = function(num1, num2) {
    return num1 + num2;
 
 }
 
 var subtract = function(num1, num2) {
     return num1 - num2;
 }
 
 var multiply = function(num1, num2) {
     return num1 * num2;
 }
 
 var divide = function(num1, num2) {
     return num1 / num2;
 }
 
 var arithmitic = function(operationType, num1, num2) {
     if(operationType === 'add') {
         return add(num1, num2);
     } else if (operationType === 'subtract') {
         return subtract(num1, num2);
     } else if (operationType === 'multiply') {
         return multiply(num1, num2);
     } else if (operationType === 'divide') {
         return divide(num1, num2);
     } else {
         throw new Error('Operation Type is not supported');
     }
     
 }
 
 var arithmitic2 = function(operationType, num1, num2) {
     switch(operationType) {
         case 'add' :
             return add(num1, num2);
             break;
         case 'subtract' :
             return subtract(num1, num2);
             break;
         default:
             throw new Error('Operation Type is not defined');
             break;
     }
 }
 
 try {
 console.log(arithmitic('add', 5, 5));
} catch(error) {
 console.log('error');
 console.log(error);
}

var countdown = function(num) {
    for(var i = num; i > 0; i--) {
        console.log(i)
    }
};
countdown(10);

var oddOrEven = function(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
};

console.log(oddOrEven(12));
console.log(oddOrEven(9));

// key one
var fizzBuzz = function(arr) {
    for(var i = 0; i < arr.length; i++ ) {
        if(arr[i] % 15 === 0) {
            console.log('fizz');
        } else if (arr[i] % 3 === 0) {
            console.log('Buzz');
        } else if (arr[i] % 5 === 0) {
            console.log('fizzBuzz')
        } else {
            console.log(arr[i]);
        }
    }
};

fizzBuzz([3,5,15,7]); // testing above