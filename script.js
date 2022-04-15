import slider from '/';

slider({
    container: '.slider',
    nextArrow: '.slider-nextBtn',
    prevArrow: '.slider-prevBtn',
    slide: '.slider__slide',
    wrapper: '.slider__slide-wrapper',
    field: '.slider__slide-field',
    slidePlusInterval: true,
    delayInterval: 10000,
    indicatorsSlide: true,
    totalCounter: '#total',
    currentCounter: '#current',
});
