// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/

var root = $('#root');

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable

var authorName = $('<p>');



// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"

authorName.text("Carol Dweck");

// TODO: Add the class `plain` to the author element

authorName.addClass('plain');

// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable

var authorQuote = $('<h1>');

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."

authorQuote.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.");

// TODO: Apply the class `fancy` to the quote element

authorQuote.addClass('fancy');

// TODO: Append the author element to the quote element

var wholeText =authorQuote.append(authorName);


root.append(wholeText);



// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`






// 3rd party libriaes above your links in the html

// creating an element use angle brackets <>

// Comments show the vanilla JavaScript equivalent statements

// var rootEl = document.getElementById("root");
// var rootEl = $('#root');

// // var titleEl = document.createElement("h1");
// var titleEl = $('<h1>');

// // titleEl.textContent = "Hello friends";
// titleEl.text('Hello friends');

// // titleEl.className = 'fancy';
// titleEl.attr('class', 'fancy');

// // titleEl.classList.add('p-5') - (`p-5` is for padding)
// titleEl.addClass('p-5');

// // titleEl.style.border = "rgb(122, 242, 242) 3px solid";
// titleEl.css('border', 'rgb(122, 242, 242) 5px solid');

// // rootEl.appendChild(titleEl);
// rootEl.append(titleEl);

// // titleEl.append("Welcome to jQuery");
// rootEl.append('<h2>With jQuery we can:</h2>');

// var abilities = [
//   'Select',
//   'Create',
//   'Style',
//   'Animate',
//   'Traverse',
//   'Event Listen',
//   'much more',
// ];

// for (var i = 0; i < abilities.length; i++) {
//   // Create a new `<div>` for each ability and its text content
//   var abilityEl = $('<li>');

//   // abilityEl.textContent = abilities[i];
//   abilityEl.text(abilities[i]);

//   // `my-3` class adds margin on top and bottom
//   abilityEl.addClass('my-3');

//   // Alternatively
//   // var abilityEl = $("<div>" + abilities[i] + "</div>");

//   // Add this new `<div>` to the abilities `<div>` container element.
//   rootEl.append(abilityEl);
// }

// // select all `<div>` elements on the page
// // document.querySelectorAll('div');
// console.log($('div'));

// // Alternatively use the `$.each` method
// $.each(abilities, function(i, ability) {
//    rootEl.append("<li>" + ability + "</li>");
// })