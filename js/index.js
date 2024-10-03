document.addEventListener("DOMContentLoaded", () => {
    const subB=document.getElementsByName('submit')[0];
    subB.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page reload
        sKey = document.querySelector('input[name="submit"]');
        console.log(sKey);
    
    });

});

    /*
    const respone = await fetch(`https://api.github.com/search/users?q=/${key}`) { 
    //octokit.request('GET /search/code', {
        headers: {
        Accept: application/vnd.github.v3+json,
        'X-GitHub-Api-Version': '2022-11-28'
        },
        body: JSON.stringify()
    

    });
    */

//create varibles/ store 
//make geoit request to github
/*
1. The `index.html` file has a form with a search input. When the form is
 submitted, it should take the value of the input and search GitHub for user
 matches using the [User Search Endpoint](#user-search-endpoint).
2. Using the results of the search, display information about the users to the
 page. (You might include showing their username, avatar and a link to their
 profile.)
 
//////HTML DATA///////
 <form id='github-form'>
    <input id='search' type='text' name='search'>
    <input type='submit' name='submit'/>
  <div id='github-container'>
    <ul id='user-list'>
    <ul id='repos-list'>

//Syntax to iterate through gitDatas
  const iterator = octokit.paginate.iterator(octokit.rest.issues.listForRepo, {
  owner: "octocat",
  repo: "hello-world",
  per_page: 100,

})





3. Clicking on one of these users should send a request to the
   [User Repos Endpoint](#user-repos-endpoint) and return data about all the
   repositories for that user.
4. Using the response from the Users Repos Endpoint, display all the

});
for await (const { data: issues } of iterator) {
  for (const issue of issues) {
    console.log("Issue #%d: %s", issue.number, issue.title);
  }
}
*/



