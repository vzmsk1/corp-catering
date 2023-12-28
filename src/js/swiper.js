import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

import { rem } from '@js/utils/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

function initSwiperSettings(initializer, payload) {
    if (!document.querySelector(`.${initializer}`)) return;

    return {
        modules: [Navigation, Pagination, EffectFade],
        speed: 2100,
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
        loop: true,
        loopPreventsSliding: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    })
);
