class gitUser {
  constructor(login, avatar_url, repos_url) {
    this.login = login;
    this.avatar = avatar_url;
    this.repos = repos_url;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const subB = document.getElementsByName('submit')[0];
  subB.addEventListener('click', async (event) => {
    event.preventDefault();
    const leKey = document.querySelector('#search').value;
    gitUrl = `https://api.github.com/search/users?q=${leKey}`;
    gitContainer = document.querySelector('github-container');

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
        //create usersArray from data
        console.log(dataT);
        
//make function to display gitUser data
/*
Displaying User Data:
Consider using an array to store instances of your gitUser class. 
You can then use Array.prototype.map() to iterate over the user data and create HTML elements dynamically.

function displayUsers(usersArray) { 
const userList = document.getElementById('user-list'); 
usersArray.forEach(user => { 
  const userItem = document.createElement('li'); 
  userItem.innerHTML = ` 
  <img src="${user.avatar}" alt="${user.login}'s avatar" /> 
  <a href="${user.url}" target="_blank">${user.login}</a>
  `; 
  userList.appendChild(userItem); 
  }); 
}

Fetching Repositories on User Click:
Add an event listener to each user element that fetches and displays their repositories.
Consider using a function like this: javascript async function fetchUserRepos(username) { const reposUrl = `https://api.github.com/users/${username}/repos`; try { const response = await fetch(reposUrl); 
const reposData = await response.json(); // Display repos console.log(reposData); } catch (error) { console.error('Error fetching repos:', error); } }
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) for more details.
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for various methods you can use.
*/
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

async function fetchUserRepos(username) {
  const reposUrl = `https://api.github.com/users/${username}/repos`; 
  try { 
  const response = await fetch(reposUrl); 
  const reposData = await response.json(); 
  // Display repos console.log(reposData); 
  } catch (error) { 
    console.error('Error fetching repos:', error); 
  } 
}

for await (const { data: issues } of iterator) {
  for (const issue of issues) {
    console.log("Issue #%d: %s", issue.number, issue.title);
  }
}
*/