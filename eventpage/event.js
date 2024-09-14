document.addEventListener('DOMContentLoaded', () => {
    const imageChangers = document.querySelectorAll('.image-changer');
    imageChangers.forEach(changer => {
        const images = changer.querySelectorAll('img');
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        // Show the first image initially
        images[0].classList.add('active');
        
        // Change images every 2 seconds
        setInterval(showNextImage, 2000);
    });
});
