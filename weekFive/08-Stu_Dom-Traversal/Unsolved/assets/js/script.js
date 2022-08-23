// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.

rootEl.children('ul').children('li').css('background-color', 'white');

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning

var bOne = $('.item-b1');
bOne.text("X");

// teacher notes

// Highlight which elements in the DOM are the children of the parent element
// Uncomment the following two lines to see the which elements are the children to the #top
// $('#top').children().css('color', 'yellow');
// console.log($('#top').children());

// // Uncomment the following line to see the which element is the first direct child of the <main>
// $('#top').children().eq(0).addClass('boxy');

// // Uncomment the following line to add a list item to the list
// $('#top').children().eq(4).append($('<li>Classmates</li>'));

// // Uncomment the following line to style the list items
// $('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');