var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

//my notes
// create room
// dectorate rom
// add on to the room

// TODO: Add ordered list items containing four favorite foods

li1.textContent = "apples";
li2.textContent = "pizza";
li3.textContent = "dumplings";
li4.textContent = "cupcakes";
listEl.setAttribute("style", "padding: 20px; background-color: #333;");
li1.setAttribute("style", "color: white; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", "color: white; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", "color: white; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", "color: white; padding: 5px; margin-left: 35px;");
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// long way, she did after we did the above

// var foods = ["lutefisk", "menudo", "haggis", "vegemite"];
// var colors = ["red", "green", "blue", "aqua"];

// listEl.setAttribute("style", "padding: 20px; background-color: #333");
// for (var i = 0; i < foods.length; i++) {
//   var liEl = document.createElement("li");
//   liEl.textContent = foods[i];
//   liEl.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: " + colors[i] + ";");
//   listEl.appendChild(liEl);
// }