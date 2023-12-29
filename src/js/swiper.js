import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

import { rem } from '@js/utils/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

function changeHeroText(activeSlide) {
    const title = document.querySelector('.hero-mainpage__title');
    const text = document.querySelector('.hero-mainpage__text');
    title.classList.remove('_visible');
    text.classList.remove('_visible');
    setTimeout(() => {
        title.classList.add('_visible');
        text.classList.add('_visible');
        title.innerHTML = activeSlide.querySelector('.slide-hero-mainpage__title').innerHTML;
        text.innerHTML = activeSlide.querySelector('.slide-hero-mainpage__text').innerHTML;
    }, 100);
}

function initSwiperSettings(initializer, payload) {
    if (!document.querySelector(`.${initializer}`)) return;

    return {
        modules: [Navigation, Pagination, EffectFade],
        speed: 2100,
        loop: true,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: `.${initializer}__button-next`,
            prevEl: `.${initializer}__button-prev`
        },
        pagination: {
            el: `.${initializer}__fraction`,
            type: 'fraction',
            formatFractionCurrent: (num) => (num > 9 ? num : '0' + num),
            formatFractionTotal: (num) => (num > 9 ? num : '0' + num)
        },
        ...payload
    };
}

new Swiper(
    '.services-swiper',
    initSwiperSettings('services', {
        speed: 800,
        breakpoints: {
            0: {
                slidesPerView: 1.08,
                spaceBetween: rem(1.6)
            },
            768: {
                spaceBetween: rem(2.4),
                slidesPerView: 2
            }
        }
    })
);

new Swiper(
    '.hero-mainpage__slider',
    initSwiperSettings('hero-mainpage', {
        speed: 800,
        loopPreventsSliding: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {
            init: (swiper) => {
                changeHeroText(swiper.slides[swiper.activeIndex]);
            },
            slideChange: (swiper) => {
                changeHeroText(swiper.slides[swiper.activeIndex]);
            }
        }
    })
);

new Swiper(
    '.reviews-swiper',
    initSwiperSettings('reviews', {
        speed: 800,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: rem(1.6),
                pagination: {
                    el: `.reviews__fraction-mobile`
                }
            },
            768: {
                spaceBetween: rem(2.4),
                slidesPerView: 2
            }
        }
    })
);

new Swiper(
    '.eating-swiper',
    initSwiperSettings('eating', {
        speed: 800,
        breakpoints: {
            0: {
                slidesPerView: 1.08,
                spaceBetween: rem(1.6)
            },
            768: {
                spaceBetween: rem(2.4),
                slidesPerView: 3
            }
        }
    })
);

new Swiper(
    '.catering-services__slider',
    initSwiperSettings('catering-services', {
        speed: 800,
        loopPreventsSliding: false,
        spaceBetween: rem(2.4),
        breakpoints: {
            768: {
                slidesPerView: 2
            }
        }
    })
);
