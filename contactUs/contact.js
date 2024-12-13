window.addEventListener("resize", function () {
  const iframe = document.querySelector("iframe");
  iframe.style.height = window.innerHeight + "px";
});

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const contactUsText = document.querySelector('h1 .green');

themeToggleButton.addEventListener('click', () => {
  if (body.style.backgroundColor === 'black') {
    // Switch to Light Mode
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#000000';
    themeToggleButton.textContent = 'Dark Mode';
    contactUsText.style.color = '#43a047'; 
  } else {
    // Switch to Dark Mode
    body.style.backgroundColor = 'black';
    body.style.color = '#ffffff';
    themeToggleButton.textContent = 'Light Mode';
    contactUsText.style.color = '#43a047'; 
  }
});
