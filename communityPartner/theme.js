document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      themeToggleButton.textContent = "Light Mode";
    }
  
    themeToggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggleButton.textContent = "Light Mode";
      } else {
        localStorage.setItem("theme", "light");
        themeToggleButton.textContent = "Dark Mode";
      }
    });
  });
  
  