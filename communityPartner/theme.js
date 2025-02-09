const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');

// Set dark mode as default on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set dark mode class on body
  body.classList.add('dark-mode');
  
  // Update theme toggle button text to 'Light Mode'
  themeToggleButton.textContent = 'Light Mode';

  // Apply dark mode styles
  body.style.backgroundColor = 'black';
  body.style.color = 'white';

  navbar.style.backgroundColor = '#101010'; // Dark mode navbar background
  navbar.style.color = 'white'; // Navbar text color
  navbar.querySelectorAll('.nav-link').forEach(link => {
    link.style.color = 'white'; // Navbar link color
  });
});

// Theme toggle event listener
themeToggleButton.addEventListener('click', () => {
  // Toggle dark mode class on the body
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    // Dark mode settings
    themeToggleButton.textContent = 'Light Mode';
    body.style.backgroundColor = 'black';
    body.style.color = 'white';

    // Navbar styling
    navbar.style.backgroundColor = '#101010'; // Dark mode navbar background
    navbar.style.color = 'white'; // Navbar text color
    navbar.querySelectorAll('.nav-link').forEach(link => {
      link.style.color = 'white'; // Change navbar link color
    });
  } else {
    // Light mode settings
    themeToggleButton.textContent = 'Dark Mode';
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#000000';

    // Navbar styling
    navbar.style.backgroundColor = 'white'; // Light mode navbar background
    navbar.style.color = 'black'; // Navbar text color
    navbar.querySelectorAll('.nav-link').forEach(link => {
      link.style.color = 'black'; // Change navbar link color
    });
  }
});