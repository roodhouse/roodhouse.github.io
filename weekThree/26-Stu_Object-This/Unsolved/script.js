// TODO: What does 'this' refer to?
// global this the object window
console.log(this);

// TODO: What does 'this' refer to?
// 'this' refers to the global in this case
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// this will 20
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
// 5750, this refers to var investor
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();

let myShows = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 
'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

let randomValue = myShows[Math.floor(Math.random() * myShows.length)];
console.log(randomValue);


// this notes

// keyword
// can have unexpected results
// console.log(this) is referring to the global context
// starts to work different once it is called from within a method
// this no longer refers to the global but not to this object