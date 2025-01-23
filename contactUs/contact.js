//WORKINGGGGG
// window.addEventListener("resize", function () {
//   const iframe = document.querySelector("iframe");
//   iframe.style.height = window.innerHeight + "px";
// });

// const themeToggleButton = document.getElementById('theme-toggle');
// const body = document.body;
// const navbar = document.querySelector('.navbar');
// const contactUsText = document.querySelector('h1 .green');

// themeToggleButton.addEventListener('click', () => {
//   // Toggle dark mode class on body and navbar
//   body.classList.toggle('dark-mode');
  
//   // Check if dark mode is active
//   if (body.classList.contains('dark-mode')) {
//     // Dark mode is active
//     themeToggleButton.textContent = 'Light Mode';
    
//     // Set body background color and text color
//     body.style.backgroundColor = 'black';
//     body.style.color = 'white';
    
//     // Navbar specific styling
//     navbar.style.backgroundColor = 'blue';
//     navbar.style.color = 'white';
//     navbar.querySelectorAll('.nav-link').forEach(link => {
//       link.style.color = 'white';
//     });

//     // Maintain your custom green color for contact text
//     contactUsText.style.color = '#43a047'; 
//   } else {
//     // Light mode is active
//     themeToggleButton.textContent = 'Dark Mode';
    
//     // Set body background color and text color
//     body.style.backgroundColor = '#ffffff';
//     body.style.color = '#000000';
    
//     // Navbar specific styling
//     navbar.style.backgroundColor = '#f8f9fa';
//     navbar.style.color = 'black';
//     navbar.querySelectorAll('.nav-link').forEach(link => {
//       link.style.color = 'black';
//     });
    
//     // Maintain your custom green color for contact text
//     contactUsText.style.color = '#43a047';
//   }
// });

window.addEventListener("resize", function () {
  const iframe = document.querySelector("iframe");
  iframe.style.height = window.innerHeight + "px";
});

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const contactUsText = document.querySelector('h1 .green');

themeToggleButton.addEventListener('click', () => {
  // Toggle dark mode class on body and navbar
  body.classList.toggle('dark-mode');
  
  // Check if dark mode is active
  if (body.classList.contains('dark-mode')) {
    // Dark mode is active
    themeToggleButton.textContent = 'Light Mode';
    
    // Set body background color and text color
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    
    // Navbar specific styling with !important to override any existing CSS
    navbar.style.setProperty('background-color', '#191919', 'important');  // Dark mode navbar background color
    navbar.style.setProperty('color', 'white', 'important');
    navbar.querySelectorAll('.nav-link').forEach(link => {
      link.style.setProperty('color', 'white', 'important');
    });

    // Maintain your custom green color for contact text
    contactUsText.style.color = '#43a047'; 
  } else {
    // Light mode is active
    themeToggleButton.textContent = 'Dark Mode';
    
    // Set body background color and text color
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#000000';
    
    // Navbar specific styling with !important to override any existing CSS
    navbar.style.setProperty('background-color', '#f8f9fa', 'important');  // Light mode navbar background color
    navbar.style.setProperty('color', 'black', 'important');
    navbar.querySelectorAll('.nav-link').forEach(link => {
      link.style.setProperty('color', 'black', 'important');
    });
    
    // Maintain your custom green color for contact text
    contactUsText.style.color = '#43a047';
  }
});


