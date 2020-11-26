$(function() {

    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    });

    var products = mixitup('.products__items', {
        selectors: {
            control: '.products__button'
        }
    });
    var designs = mixitup('.designs__items', {
        selectors: {
            control: '.designs__button'
        }
    });

});