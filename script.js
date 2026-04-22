document.addEventListener("DOMContentLoaded", () => {
  const githubUser = "Awlynnn";
  const url = `https://api.github.com/users/${githubUser}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const repoCount = document.getElementById("repo-count");
      if (repoCount) repoCount.textContent = data.public_repos ?? "-";
    })
    .catch(() => {
      const githubSection = document.querySelector(".github");
      if (githubSection) {
        githubSection.querySelector("p").textContent = "Unable to load GitHub stats right now, but you can still visit the profile below.";
      }
    });
});