function resetCarousel() {
    let carousel = document.querySelector('.carousel');
    let left = document.querySelector('.carousel-wrapper .left');
    let right = document.querySelector('.carousel-wrapper .right');
    let item = document.querySelector('.carousel .item');
    let maxItems = document.querySelectorAll('.carousel .item').length;
    let currentItem = 1;

    carousel.scrollLeft = 0;
    right.style.display = currentItem === maxItems ? "none" : "block";
    left.style.display = currentItem === 1 ? "none" : "block";

    right.addEventListener('click', function (e) {
        currentItem += 1;
        right.style.display = currentItem === maxItems ? "none" : "block";
        left.style.display = currentItem === 1 ? "none" : "block";

        carousel.scrollLeft += item.clientWidth;

    });
    left.addEventListener('click', function () {
        currentItem -= 1;
        right.style.display = currentItem === maxItems ? "none" : "block";
        left.style.display = currentItem === 1 ? "none" : "block";

        carousel.scrollLeft -= item.clientWidth;
    });
}

resetCarousel();

window.addEventListener('resize', function (event) {
    resetCarousel()
}, true);