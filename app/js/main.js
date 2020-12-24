$(function() {

    // INPUT STYLER
    $('.product-one__input').styler();

    // TABS
    $('.product-one__tab-link').on('click', function(e) {
        e.preventDefault();
        $('.product-one__tab-link').removeClass('product-one__tab-link--active');
        $('.product-one__tab-content-item').removeClass('product-one__tab-content-item--active');
        $(e.target).addClass('product-one__tab-link--active');
        $($(e.target).attr('href')).addClass('product-one__tab-content-item--active');
    })

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

    $('.related-products__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.product-one__big-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-one__thumb-box'
    });
    $('.product-one__thumb-box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-one__big-box',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        arrows: false
    });


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