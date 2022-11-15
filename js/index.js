new Swiper('.sliderMain', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            centeredSlides: false,
            loop: false,
            spaceBetween: 16,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            centeredSlides: false,
            loop: false,
            spaceBetween: 16,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            centeredSlides: false,
            loop: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        },
        1023: {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        }
    },
    });
const menuBtn = document.querySelector('.mobile-button');
const mobileMenu = document.querySelector('.mobile-wrap');
const bodyColor = document.querySelector('body');
const headerColor = document.querySelector('.header')
const menuClose =document.querySelector('.cancel-btn');
function mobileToggle(){
    mobileMenu.classList.toggle('mobile-wrap--active');
    bodyColor.classList.toggle('body--color');
    headerColor.classList.toggle('header--active');
}
function mobileClose(){
    mobileMenu.classList.remove('mobile-wrap--active');
    bodyColor.classList.remove('body--color');
    headerColor.classList.remove('header--active');
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

    const breakpoint = window.matchMedia('(min-width:1199px)'); // keep track of swiper instances to destroy later

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
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: false,
            loop: false,

            a11y: true,
            keyboardControl: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
            },
            paginationClickable: true
        });
    };
    const cabinetSwiper = function () {
        mySwiper = new Swiper('.tariffsSwiperCabinet', {
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: false,
            loop: false,

            a11y: true,
            keyboardControl: true,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
            },
            paginationClickable: true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    loop: false,
                    spaceBetween: 16,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    loop: false,
                    spaceBetween: 16,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    loop: false,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                },
                1023: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                }
            },
        });
    };
    breakpoint.addListener(breakpointChecker); // kickstart

    breakpointChecker();
})();