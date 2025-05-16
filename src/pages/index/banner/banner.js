import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    speed: 400,
    spaceBetween: 100,
    navigation: {
        enabled: false,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'disabled',
    },
    breakpoints: {
        425: {
            navigation: {
                enabled: true,
            },
        },
    },
});
