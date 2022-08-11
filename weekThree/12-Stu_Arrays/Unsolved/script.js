// WRITE YOUR CODE HERE
var studentNames = ['Rachel', 'Alyson', 'Emily', 'Caroline'];
console.log(studentNames.length)

console.log('Welcome to the class' + studentNames[0]);
console.log('Welcome to the class' + studentNames[1]);
console.log('Welcome to the class' + studentNames[2]);
console.log('Welcome to the class' + studentNames[3]);

studentNames[0] = 'Laura';

if(studentNames[0] !== 'Rachel') {
    console.log('Laura is in the class');
}