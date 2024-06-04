document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("background-video");
    const slideshowContainer = document.getElementById("slideshow-container");
    let slideIndex = 0;

    // Function to show the slides
    function showSlides() {
        const slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    // Event listener for video end to start slideshow
    video.addEventListener('ended', function() {
        document.querySelector('.video-container').style.display = 'none';
        slideshowContainer.style.display = 'block';
        showSlides();
    });

    // Force end video after it plays once
    video.addEventListener('canplaythrough', function() {
        video.loop = false;
    });
});
