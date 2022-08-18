var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function(){
    count++;
    setCounterText(); 
})
// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function(){
  if (count > 0 ){
  count--;
  setCounterText(); 
}})
// element.addEventListener("click", runFunction)

// or 

// element.addEventListener("click",  function(){


// });

// Access toggle switch HTML element
// var themeSwitcher = document.querySelector("#theme-switcher");
// var container = document.querySelector(".container");

// // Set default mode to dark
// var mode = "dark";

// // Listen for a click event on toggle switch
// themeSwitcher.addEventListener("click", function() {
//   // If mode is dark, apply light background
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//   // If mode is light, apply dark background 
//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// });