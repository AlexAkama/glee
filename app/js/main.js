$(function() {

    // Переключение текста в добавить в корзину/избранное
    $('.action-box__input--cart').on('click', function() {
        if ($(this).is(':checked')) {
            $('.action-box__check-text--cart').text('remove from cart');
        } else {
            $('.action-box__check-text--cart').text('add to cart');
        }
    });
    $('.action-box__input--fav').on('click', function() {
        if ($(this).is(':checked')) {
            $('.action-box__check-text--fav').text('remove from favorites');
        } else {
            $('.action-box__check-text--fav').text('add to favorites');
        }
    });

    // RANGE SLIDER
    $('.price-filter__input').ionRangeSlider({
        onStart: function(data) {
            $('.price-filter__from').text(data.from.toFixed(2));
            $('.price-filter__to').text(data.to.toFixed(2));
        },
        onChange: function(data) {
            $('.price-filter__from').text(data.from.toFixed(2));
            $('.price-filter__to').text(data.to.toFixed(2));
        }
    });

    // STARS RATING RATE-YO
    $('.stars').rateYo({
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true,
        starWidth: "10px"
    });

    // Переключение стиля кнопки login.html
    $('.modal__create-link').on('mouseover', function(e) {
        $('.modal__submit-btn').addClass('modal--simple-btn')
    });
    $('.modal__create-link').on('mouseleave', function(e) {
        $('.modal__submit-btn').removeClass('modal--simple-btn')
    });

    // SLICK SLIDER

    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    });

    // MIX IT UP

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