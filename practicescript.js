var content = document.getElementById("contents");
console.log(content);

var button =  document.getElementById("show-more");
console.log(button);

button.onclick = function() {
    if(content.className == "open" ) {
        // shrink the box
        content.className = "";
        button.innerHTML = "Show More";
    } else {
        // expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
    }
};