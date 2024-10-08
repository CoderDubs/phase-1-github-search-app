class gitUser {
  constructor(login, avatar, url) {
    this.login = login;
    this.avatar = avatar; //"avatar_url"
    this.url = url;//"repos_url"
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const subB = document.getElementsByName('submit')[0];
  subB.addEventListener('click', async (event) => {
    event.preventDefault();
    const leKey = document.querySelector('#search').value;
    gitUrl = `https://api.github.com/search/users?q=${leKey}`;
    
    
    if (leKey) {
      try {
        console.log(`Sending request to: ${gitUrl}`);
        const response = await fetch(gitUrl, {
          method: 'GET',
          headers: {
            Accept: "application/vnd.github.v3+json",
            //'X-GitHub-Api-Version': '2022-11-28'
          },
        });
        if (!response.ok) {
          // Check for HTTP errors
          throw new Error(`Request failed with status: ${response.status} - ${response.statusText}`);
        }
        console.log('check');
        
        const dataT = await response.json();
        console.log(dataT);
        //make function to display gitUser data
        
        
        
        
        
        
        //make new click event listener on each returned gitUser
        //upon click return list of repos
        //https://api.github.com/users/(clickEvent)/repos <--get repos?
        
      
      } catch (error) {
        console.error(error.message);
      }

    }

  });
});

/*
2. Using the results of the search, display information about the users to the
 page. (You might include showing their username, avatar and a link to their
 profile.)
 <div id='github-container'>
      <ul id='user-list'>
      </ul>
      <ul id='repos-list'>
3. Clicking on one of these users should send a request to the
   [User Repos Endpoint](#user-repos-endpoint) and return data about all the
   repositories for that user.
4. Using the response from the Users Repos Endpoint, display all the

for await (const { data: issues } of iterator) {
  for (const issue of issues) {
    console.log("Issue #%d: %s", issue.number, issue.title);
  }
}
*/



