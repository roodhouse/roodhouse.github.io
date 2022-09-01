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

console.log(arithmitic('add', 5, 5));
console.log(arithmitic2('add', 5, 5));
