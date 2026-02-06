document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const searchInput = document.getElementById('search');
    const reposList = document.getElementById('repos-list');
    const userInfo = document.getElementById('user-info');

    // Hamburger menu toggle with animation
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside (optional)
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Theme toggle
    themeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        themeToggle.checked = true;
    }

    // Fetch user info and repos
    fetch('https://api.github.com/users/sd6387400-lang')
        .then(response => response.json())
        .then(user => {
            userInfo.innerHTML = `
                <p><strong>Name:</strong> ${user.name || 'N/A'}</p>
                <p><strong>Bio:</strong> ${user.bio || 'N/A'}</p>
                <p><strong>Public Repos:</strong> ${user.public_repos}</p>
                <p><strong>Followers:</strong> ${user.followers}</p>
            `;
        });

    fetch('https://api.github.com/users/sd6387400-lang/repos?sort=updated')
        .then(response => response.json())
        .then(repos => {
            displayRepos(repos);
            searchInput.addEventListener('input', function() {
                const filteredRepos = repos.filter(repo => 
                    repo.name.toLowerCase().includes(this.value.toLowerCase())
                );
                displayRepos(filteredRepos);
            });
        });

    function displayRepos(repos) {
        reposList.innerHTML = '';
        repos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.className = 'repo-card';
            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available.'}</p>
                <p><strong>Language:</strong> ${repo.language || 'N/A'}</p>
                <p><strong>Stars:</strong> ${repo.stargazers_count} | <strong>Forks:</strong> ${repo.forks_count}</p>
                <div class="repo-links">
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                    <a href="${repo.html_url}/releases" target="_blank">Releases</a>
                    <a href="${repo.html_url}#readme" target="_blank">README</a>
                </div>
            `;
            reposList.appendChild(repoCard);
        });
    }
});
