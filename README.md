# Slider settings ↔️ 

This is a very easy to use slider that has a number of settings and additions. You only need to maintain a few values and follow the HTML structure. Happy using!

Example: https://vladimirbelebnev.github.io/my-slider/

### HTML structure

    <div class="slider">
        <div class="slider__counter">
            <span id="current"></span>
            /
            <span id="total"></span>
        </div>
        <div class="slider__slide-wrapper">
            <div class="slider__slide-field">
                <div class="slider__slide"> // 1
                    <img src="/" alt="name">
                    <p>And other content</p>
                </div>
                <div class="slider__slide"> // 2
                    <img src="/" alt="name">
                    <p>And other content</p>
                </div>
                <div class="slider__slide"> // 3...
                    <img src="/" alt="name">
                    <p>And other content</p>
                </div>
            </div>
        </div>
        <button class="slider-prevBtn">
        <button class="slider-nextBtn">
    </div>
    
❗Ideal structure of the HTML code (class names can be changed). Note that you can choose not to use the number of slides in total and the current slide (just leave it out in your HTML structure).

### JS settings

⚡ These settings are suitable for the example given above in the HTTL structure. The name of the classes can be changed, but the structure must be respected.

    slider({
        container: '.slider',
        slide: '.slider__slide',
        wrapper: '.slider__slide-wrapper',
        field: '.slider__slide-field',
        nextArrow: '.slider-nextBtn',
        prevArrow: '.slider-prevBtn',
        slidePlusInterval: true,
        delayInterval: 10000,
        indicatorsSlide: true,
        totalCounter: '#total',
        currentCounter: '#current',
    });
    
1. **container** is the class that wraps the entire slider.
2. **slide** is the slide class.
3. **wrapper** is a slide wrapper.
4. **field** is an important class wrapping all slides.
5. **nextArrow** is a button, after clicking on which the slide will switch to one forward.
6. **prevArrow** is a button, after clicking on which the slide will slide will switch one back.
7. **slidePlusInterval** if you want the slides to switch automatically, you need to move the setting to true (if not, then just don't touch it.) (***optional setting***).
8. **delayInterval** this setting allows you to choose the time after which the slides will switch automatically (note that the time must be recorded in milliseconds) (if not, then just don't touch it.) (***optional setting***).
9. **indicatorsSlides** this setting allows you to display the total number of slides and the specific active slide. There is a transition by clicking on them. (if not, then just don't touch it.) (***optional setting***).
10. **totalCounter** this setting will be able to display the number of the current slide (if not, then just don't touch it.) (***optional setting***).
11. **currentCounter** this setting will be able to output the number of all slides (if not, then just don't touch it.) (***optional setting***).
    
