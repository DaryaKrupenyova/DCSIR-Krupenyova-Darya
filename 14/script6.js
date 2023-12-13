"use sctrict"

let elem = document.getElementById('elem');

function animate({
    timing,
    draw,
    duration
}) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;

        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        } else {
            if (!isElementInViewport(elem)) {
                elem.style.width = 50 + 'px';
                elem.style.height = 50 + 'px';
                elem.style.top = 50 + '%';
                elem.style.left = 50 + '%';
            }
        }
    })
}

function linear(timeFraction) {
    return timeFraction;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let elTop = elem.offsetTop;
let elLeft = elem.offsetLeft;
let elHeight = elem.offsetHeight;
let elWidth = elem.offsetWidth;
let randDistanceTop = getRandomNumber(80, 200);
let randDirectionTop = getRandomNumber(-1, 1);
let randDistanceLeft = getRandomNumber(80, 200);
let randDirectionLeft = getRandomNumber(-1, 1);
let randSize = getRandomNumber(-20, 20);

function draw(progress) {
    elem.style.top = elTop + progress * randDistanceTop * randDirectionTop + 'px';
    elem.style.left = elLeft + progress * randDistanceLeft * randDirectionLeft + 'px';
    elem.style.width = elWidth + progress * randSize + "px";
    elem.style.height = elHeight + progress * randSize + "px";
}

function isElementInViewport(elem) {
    let rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.width >= 5 &&
        rect.height >= 5 
    );
}

elem.addEventListener("click", function () {
    elHeight = elem.offsetHeight;
    elWidth = elem.offsetWidth;
    elTop = elem.offsetTop;
    randSize = getRandomNumber(-20, 20);
    randDistanceTop = getRandomNumber(80, 200);
    randDirectionTop = getRandomNumber(-1, 1);
    if (!randDirectionTop) {
        randDirectionTop = 1;
    }
    elLeft = elem.offsetLeft;
    randDistanceLeft = getRandomNumber(80, 200);
    randDirectionLeft = getRandomNumber(-1, 1);
    if (!randDirectionLeft) {
        randDirectionLeft = 1;
    }
    animate({
        duration: 2000,
        timing: linear,
        draw: draw
    })

    animateBack({
        duration: 300,
        timing: linear,
        draw: drawBack
    })
})

function animateBack({
    timing,
    draw,
    duration
}) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;

        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    })
}

function drawBack(progress) {
    document.body.style.background = 'rgb(' + progress * 255 + ', ' + progress * 255 + ', ' + progress * 255 + ')';
}
