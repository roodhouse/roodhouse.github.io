var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();
  console.log(this);
  
  var searchInput = document.querySelector('#search-input').value.trim();
  var formatInput = document.querySelector('#format-input').value;

  if(!searchInput) {
    console.error('you need to provide a search term');
    return;
  }

  var queryString = './search-results.html?q=' + searchInput + '&format=' + formatInput;
  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
