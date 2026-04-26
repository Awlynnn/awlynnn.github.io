// Portfolio JavaScript
// Jacob Arrhenius Portfolio

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add fade-in animation for cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards
  document.querySelectorAll('.repo-card, .project-card, .spotify-card, .skill-category, .music-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // GitHub API - Fetch user repos (optional enhancement)
  // Uncomment to enable dynamic GitHub data fetching
  /*
  fetchGitHubRepos();
  
  async function fetchGitHubRepos() {
    try {
      const response = await fetch('https://api.github.com/users/Awlynnn/repos?sort=updated&per_page=6');
      const repos = await response.json();
      
      const reposContainer = document.getElementById('github-repos');
      if (reposContainer && repos.length > 0) {
        reposContainer.innerHTML = repos.map(repo => `
          <div class="repo-card">
            <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.name}</a>
            <p class="repo-description">${repo.description || 'No description available'}</p>
            <div class="repo-stats">
              ${repo.language ? `<span><span class="language-dot language-${getLanguageClass(repo.language)}"></span>${repo.language}</span>` : ''}
              <span>⭐ ${repo.stargazers_count}</span>
              <span>🔀 ${repo.forks_count}</span>
            </div>
          </div>
        `).join('');
      }
    } catch (error) {
      console.log('GitHub API not available - using static content');
    }
  }
  */

  // Helper function for language colors
  function getLanguageClass(language) {
    const languageMap = {
      'C#': 'csharp',
      'C++': 'cpp',
      'Python': 'python',
      'JavaScript': 'javascript',
      'HTML': 'html',
      'CSS': 'css',
      'Unity': 'unity'
    };
    return languageMap[language] || 'csharp';
  }

  console.log('Portfolio loaded successfully!');
});