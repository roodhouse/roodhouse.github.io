//// on save button click, set the contents that was entered into the textarea into the textarea
$('button').on("click", function () {

    // grabbing the successDiv and setting to an empty string
    var btn = $('button').parent().parent().siblings('#successDiv');
    btn = btn[0];
    btn.innerHTML = "";

    // setting the entered text in local storage
    var hourKey = $(this).parent().parent().attr('id');
    var activity = $(this).parent().siblings(".timeBlock").children().val();
    localStorage.setItem(hourKey, activity);

    $('.jumbotron').css("margin-bottom", "1rem")

    // success message
    if (activity !== "") {
        btn.innerHTML = activity + " @ " + hourKey + " saved to your calendar <i class='fa-solid fa-check'></i>";
    } else {
        btn.innerHTML = "please enter something before you save"
    }

});

//// momment setup
var now = moment();

// display the date at the top of the page
$('#currentDay').text(now.format("dddd, MMMM Do"));

// Change class of blocks based on current hour
$('.row').each(function(){
    var pageCurrentHour = parseInt($(this).attr('id')); // grab the id of the row
    var currentHour = new Date().getHours(); // get the current hour
    
    if (currentHour === pageCurrentHour) { 
        $(this).children(".timeBlock").children().addClass('present');
    } else if (currentHour > pageCurrentHour){
        $(this).children(".timeBlock").children().addClass('past');
    } else {
        $(this).children(".timeBlock").children().addClass('future');
    }
});

// getting the value from localstorage and setting the textarea that value
for (var i = 9; i < 18; i++) {
    $(`#${i} .timeBlock textarea`).val(localStorage.getItem(i));
};
