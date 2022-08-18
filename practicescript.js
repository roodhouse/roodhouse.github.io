var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function() {
    if(myForm.name.value == ""){
        message.innerHTML = "please enter a name";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
};

var myFunction = function(x)  {
var x = 0;

if (x < 1000000) {
    var digit = x + 1;
    if(x <= digit){
        digit++;
        console.log(digit);
        
    }
}
myFunction();
}