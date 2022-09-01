      fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// issues
//  per_page=10
//  state=open
//  sort=created
//  direction=desc'

//  Bring back open issues and sort them by created in desc order, only 10 per page
