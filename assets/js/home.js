// Slider 
var slideIndex = 0;
const slides = document.getElementsByClassName("slider__slide");

nextSlide();

function nextSlide() {
    slideIndex += 1;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    showSlides(slideIndex);
    setTimeout(nextSlide, 4000);
}

function showSlides(n) {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Search click 
function searchToggle(obj, evt) {
    const container = $(obj).closest('.search');
    const menu = document.querySelector('.navbar__list');
    const searchBox = document.querySelector('.search__input');

    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
        menu.style.display = 'none';
        searchBox.focus();
    } else 
    if (container.hasClass('active') && $(obj).closest('.search__input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search__input').val('');
        menu.style.display = 'flex';
    }     
}   