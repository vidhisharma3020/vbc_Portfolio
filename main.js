const roles = ["Mobile App Development,", "Website Development,", "Software Development,","Game Development,", "Blockchain Development."];
let currentIndex = 0;

const dynamicText = document.getElementById('dynamic-text');

function changeText() {
    dynamicText.textContent = roles[currentIndex];
    currentIndex = (currentIndex + 1) % roles.length;
}

setInterval(changeText, 2000);
changeText();

var swiper = new Swiper('.swiper-client-logos', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



