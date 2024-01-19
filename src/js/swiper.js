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

if (document.querySelectorAll('.menu-offer__slider').length) {
    document.querySelectorAll('.menu-offer__slider').forEach((slider) => {
        new Swiper(slider, {
            modules: [Navigation, Pagination, EffectFade],
            speed: 800,
            loop: true,
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                prevEl: slider.parentElement.querySelector('.menu-offer__button-prev'),
                nextEl: slider.parentElement.querySelector('.menu-offer__button-next')
            },
            pagination: {
                el: slider.parentElement.querySelector('.menu-offer__fraction'),
                type: 'fraction',
                formatFractionCurrent: (num) => (num > 9 ? num : '0' + num),
                formatFractionTotal: (num) => (num > 9 ? num : '0' + num)
            }
        });
    });
}

new Swiper(
    '.employees-swiper',
    initSwiperSettings('employees', {
        modules: [Navigation, Pagination, EffectFade],
        speed: 600,
        loopPreventsSliding: false,
        spaceBetween: rem(4),
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    })
);

new Swiper(
    '.certificates-swiper',
    initSwiperSettings('certificates', {
        speed: 800,
        loopPreventsSliding: false,
        slidesPerView: 1.12,
        spaceBetween: rem(3.2),
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: rem(4)
            }
        }
    })
);

const certificatesModalSwiper = new Swiper(
    '.certificates-modal-swiper',
    initSwiperSettings('certificates-modal', {
        speed: 800,
        loopPreventsSliding: false,
        spaceBetween: rem(4),
        slidesPerView: 1,
        centeredSlides: true
    })
);

document.addEventListener('DOMContentLoaded', () => {
    const certSlides = document.querySelectorAll('.certificates__slide-img');
    if (certSlides.length) {
        const certModalNavigation = document.querySelector('.certificates-modal__navigation');
        const certSlider = document.querySelector('.certificates-modal-swiper');
        certSlides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                certificatesModalSwiper.slideTo(index + 1);
            });
        });
        document.querySelectorAll('.certificates-modal__slide-img').forEach((img) => {
            img.addEventListener('click', () => {
                img.classList.toggle('large');
                certModalNavigation.classList.toggle('hidden');
                certSlider.classList.toggle('block');
            });
        });
        document.querySelector('.certificates-modal__close').addEventListener('click', () => {
            document.querySelectorAll('.certificates-modal__slide-img').forEach((img) => {
                img.classList.remove('large');
            });
            certModalNavigation.classList.remove('hidden');
            certSlider.classList.remove('block');
        });
    }
});
