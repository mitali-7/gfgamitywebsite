document.querySelectorAll('.imgbox').forEach(imgbox => {
    imgbox.addEventListener('mouseenter', () => {
        imgbox.querySelector('.details').style.display = 'block';
    });

    imgbox.addEventListener('mouseleave', () => {
        imgbox.querySelector('.details').style.display = 'none';
    });
});

// Responsive Navbar Toggle
document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
