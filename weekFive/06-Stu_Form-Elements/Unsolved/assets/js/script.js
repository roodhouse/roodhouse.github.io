var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var shoppingInputEl = $('#shopping-input');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSumbit(e) {
    e.preventDefault();
    var shoppingItem = shoppingInputEl.val();
    if(shoppingItem) {
        var listItem = $('<li>').text(shoppingItem);
    shoppingListEl.append(listItem);
    shoppingInputEl.val('');
    }
    

}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on("submit", handleFormSumbit);

// .on(submit) .on(click)




// / input[name="first-name"]

// firstName.val() -- get or set. when set then you have values 