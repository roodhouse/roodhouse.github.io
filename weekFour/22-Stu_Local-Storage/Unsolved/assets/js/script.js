var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  var emailFromLs = localStorage.getItem("email");
  var passwordFromLs = localStorage.getItem("storedPassword")
  userEmailSpan.innerHTML = emailFromLs;
  userPasswordSpan.innerHTML = passwordFromLs;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // TODO: Save email and password to localStorage and render the last registered user
  localStorage.setItem("email", email);
  localStorage.setItem("storedPassword", password);
  renderLastRegistered();
  }
}); 


// json.stingify // to put it in key:vlue
//json.parse // grab it out of local storage but only use hte key
