var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data[0].login);
      userContainer.innerHTML = ''; // clear out the container you are about to use
      
      // TODO: Loop through the data and generate your HTML
      data.forEach (function(user) {
        var userNameEl = document.createElement('h3');
        var urlEl = document.createElement('p');
        userNameEl.textContent = user.login;
        urlEl.textContent = user.url;

        userContainer.append(userNameEl);
        userContainer.append(urlEl);
      })
    });
}
fetchButton.addEventListener('click', getApi);
