import slider from '/';

slider({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
    slidePlusInterval: true,
    delayInterval: 3000,
    totalCounter: '#total',
    currentCounter: '#current',
    indicatorsSlide: true,
});
