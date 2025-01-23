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


//NAVBAR
// JavaScript for the Collaborations page theme toggle
// document.addEventListener("DOMContentLoaded", function () {
//   const themeToggleBtn = document.getElementById("theme-toggle");
//   const navbar = document.querySelector("nav");

//   // Load the initial mode from localStorage
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "dark") {
//     document.body.classList.add("dark-mode");
//     navbar.style.backgroundColor = "#191919";
//     navbar.style.color = "white";
//     themeToggleBtn.textContent = "Light Mode";
//   } else {
//     document.body.classList.remove("dark-mode");
//     navbar.style.backgroundColor = ""; // Default color
//     navbar.style.color = ""; // Default color
//     themeToggleBtn.textContent = "Dark Mode";
//   }

//   // Toggle theme on button click
//   themeToggleBtn.addEventListener("click", function () {
//     if (document.body.classList.contains("dark-mode")) {
//       document.body.classList.remove("dark-mode");
//       navbar.style.backgroundColor = ""; // Default light mode background
//       navbar.style.color = ""; // Default light mode text
//       themeToggleBtn.textContent = "Dark Mode";
//       localStorage.setItem("theme", "light");
//     } else {
//       document.body.classList.add("dark-mode");
//       navbar.style.backgroundColor = "#191919";
//       navbar.style.color = "white";
//       themeToggleBtn.textContent = "Light Mode";
//       localStorage.setItem("theme", "dark");
//     }
//   });
// });

