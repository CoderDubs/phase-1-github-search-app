const user = {};
const arr = [];

document.addEventListener('DOMContentLoaded', () => {
  
  const githubForm = document.getElementById('github-form');
  githubForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const userKey = document.getElementById('search').value;
    const gitUrl = `https://api.github.com/search/users?q=${userKey}`;

    if (userKey) {
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
    const userList = document.querySelector('#user-list');
    userData.forEach(user => {
      const userItem = document.createElement('li');

      // Generate a random color for the userone liner to set random color in inline js
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

      userItem.innerHTML = `
            <p style="font-size: 30px; color: ${randomColor};">${user.login}</p>
            <img src="${user.avatar}" alt="${user.login}'s avatar" />
        `;

      // Add an event listener to display repositories in the same color
      userItem.addEventListener('click', () => {
        window.scrollTo(0, 0);
        displayRepo(user.repos, randomColor);
      });

      userItem.className = 'users';
      userList.append(userItem);
    });
  }

  async function displayRepo(repos, color) {
    const response = await fetch(repos, {
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

    // Clear existing repos
    repoList.innerHTML = '';

    jData.forEach(repo => {
      const repoItem = document.createElement('li');
      repoItem.innerHTML = `
            <p style="font-size: 30px; color: ${color};">${repo.name}</p>
            <p>${repo.language}</p>
        `;
      repoList.append(repoItem);
    });
  }

  const clearButton = document.getElementById('clear');
  clearButton.addEventListener("click", () => {
    innerHTML = '';
  });

});