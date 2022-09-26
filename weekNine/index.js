let a = process.argv[2];
let b = process.argv[3];

if (a === b ) {
    console.log('true');
} else {
    console.log('false');
}

console.log(a === b);

a === b ? console.log('true'): console.log('false')