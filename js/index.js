const user = {};
const arr = [];

document.addEventListener('DOMContentLoaded', () => {
  
  const githubForm = document.getElementById('github-form');
  githubForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const leKey = document.getElementById('search').value;
    const gitUrl = `https://api.github.com/search/users?q=${leKey}`;


    /*
    4. Users Repos Endpoint, display all the repositories for that user on the page.
## Bonus
- Toggle the search bar between searching for users by keyword and searching for
  repos by keyword by adding an extra button. Hint: you can use the same search
  bar for this, but you may need to create a variable which stores what the
  current search type is (user or repo). The endpoint to search repositories by
  keyword is
  [here](https://developer.github.com/v3/search/#search-repositories).
    */

    if (leKey) {
      try {
        console.log(`Sending request to: ${gitUrl}`);
        const response = await fetch(gitUrl, {
          method: 'GET',
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        });
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status} - ${response.statusText}`);
        }
        const jData = await response.json();
        //console.log(user);
        const userData = jData.items.map(user => {
          return {
            login: user.login,
            avatar: user.avatar_url,
            repos: user.repos_url,
            url: user.url
          };
        });
        
        
        displayUsers(userData);
        console.log(jData);
      } catch (error) {
        console.error(error.message);
      }
    }
  });

  function displayUsers(userData) {
    userList = document.querySelector('#user-list');
    userData.forEach(user => {
      const userItem = document.createElement('li');
      userItem.addEventListener('click', () => {
        
        displayRepo(user.repos)
      })
      userItem.className = 'users';
      userItem.innerHTML = `
      <p style="font-size: 30px"=> ${user.login}</p>
      <img src="${user.avatar}" alt="${user.login}'s avatar" />
      `;
      userList.append(userItem);
      });
    }

  async function displayRepo(repos, url) {
    const response = await fetch(repos, url, {
      method: 'GET',
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status} - ${response.statusText}`);
    }
    const jData = await response.json();
    const repoList = document.getElementById('repos-list');
    jData.forEach(repo => {
      const repoItem = document.createElement('li');
      console.log(repo.name);
      repoItem.innerHTML = `
      <p style="font-size: 30px">${repo.name}</p>
      <p>${repo.language}</p>
      `
      repoList.append(repoItem);
    })
  }

});