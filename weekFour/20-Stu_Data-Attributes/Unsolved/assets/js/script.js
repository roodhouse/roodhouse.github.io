var container = document.querySelector(".container");
var dataSet = 
container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")){
    if (element.dataset.state === "hidden") {
      element.setAttribute("data-state", "banana")
      element.textContent = element.dataset.number;
    } else {
      element.setAttribute("data-state", "hidden")
      element.textContent = "";
    }
  }
});