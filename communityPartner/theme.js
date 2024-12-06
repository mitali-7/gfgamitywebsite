const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const footer = document.querySelector('.footer-row'); // Select the footer

// Check and set initial theme
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light');
}

const savedTheme = localStorage.getItem('theme');
body.className = savedTheme;
themeToggleButton.textContent = body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';

// Set initial footer text color
footer.style.color = savedTheme === 'dark' ? 'white' : 'black';

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  themeToggleButton.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

  // Change footer text color
  footer.style.color = currentTheme === 'dark' ? 'white' : 'black';

  // Save theme preference
  localStorage.setItem('theme', currentTheme);
});
