//WRITE YOUR CODE BELOW
// object 

// var test = {};

// var planet = {
//     name: "Earth",
//     age: "4.5 bill years",
//     moons: 1
// };

// console.log(planet.name);
// console.log(planet["name"]);

// console.log(typeof planet);


var customerOrder = {
    name: "Coke",
    sugar: 10,
    ready: true
};
console.log(customerOrder.name)
console.log(customerOrder.sugar);

if (customerOrder.ready) {
    console.log('Ready for pick-up ' + customerOrder.name + ' with ' + customerOrder.sugar);
} else {
    console.log('Still in order queue' + customerOrder['name'] + ' with ' + customerOrder['sugar']);
}