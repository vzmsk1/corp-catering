import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { rem } from '@js/utils/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

function initSwiperSettings(initializer, payload) {
    if (!document.querySelector(`.${initializer}`)) return;

    return {
        modules: [Navigation, Pagination],
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
    '.reviews-swiper',
    initSwiperSettings('reviews', {
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
