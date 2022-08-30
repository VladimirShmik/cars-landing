new Swiper('.sliderMain', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoPlay: 3000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    });
const menuBtn = document.querySelector('.mobile-button');
const mobileMenu = document.querySelector('.mobile-wrap');
const bodyColor = document.querySelector('body');
const menuClose =document.querySelector('.cancel-btn');
function mobileToggle(){
    mobileMenu.classList.toggle('mobile-wrap--active');
    bodyColor.classList.toggle('body--color');
}
function mobileClose(){
    mobileMenu.classList.remove('mobile-wrap--active');
    bodyColor.classList.remove('body--color');
}
menuBtn.addEventListener("click", mobileToggle);
menuClose.addEventListener("click", mobileClose);
const form = document.querySelector(".verification-form--found");
if(form){
    function togglePasswordType(input, button){
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        button.classList.toggle('input-group-icon--active');
    }
    form.addEventListener('click', function({ target }) {
        if (target.classList.contains('form-password-btn')) {
            const container = target.closest('.form-password')
            const input = container.querySelector('.form-password-input')
            togglePasswordType(input, target)
        }
    });
}


"use strict";

(function () {
    'use strict'; // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout

    const breakpoint = window.matchMedia('(min-width:1023px)'); // keep track of swiper instances to destroy later

    let mySwiper;
    const breakpointChecker = function () {
        // if larger viewport and multi-row layout needed
        if (breakpoint.matches === true) {
            // clean up old instances and inline styles when available
            if (mySwiper !== undefined) mySwiper.destroy(true, true); // or/and do nothing

            return; // else if a small viewport and single column layout needed
        } else if (breakpoint.matches === false) {
            // fire small viewport version of swiper
            return enableSwiper();
        }
    };

    const enableSwiper = function () {
        mySwiper = new Swiper('.tariffsSwiper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            autoplay: 3000,
            a11y: true,
            keyboardControl: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
            },
            paginationClickable: true
        });
    };
    breakpoint.addListener(breakpointChecker); // kickstart

    breakpointChecker();
})();