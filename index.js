let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.getElementById('prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    slides[currentSlide].classList.add('active');
});

document.getElementById('next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    slides[currentSlide].classList.add('active');
});

function showHideSections(show, hide) {
    document.querySelector(`.${hide}`).classList.add("hidden");
    document.querySelector(`.${show}`).classList.remove("hidden");
}