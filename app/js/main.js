$(function() {

    $('.modal__create-link').on('mouseover', function(e) {
        $('.modal__submit-btn').addClass('modal--simple-btn')
    });
    $('.modal__create-link').on('mouseleave', function(e) {
        $('.modal__submit-btn').removeClass('modal--simple-btn')
    });

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