const burger = document.querySelector('.burger');

const defaultLabel = 'развернуть меню';
const openedLabel = 'закрыть меню';

const parent = burger.parentElement;
const navigation = parent.querySelector('.navigation');

function burgerCloseHandler() {
    navigation.classList.remove('active');
    burger.classList.remove('active');
}
function burgerToggleHandler() {
    let label = burger.getAttribute('aria-label');

    navigation.classList.toggle('active');
    burger.classList.toggle('active');

    label = defaultLabel ? openedLabel : defaultLabel;
    burger.setAttribute('aria-label', label);
}

burger.addEventListener('click', burgerToggleHandler);

function handleClickOutside(event) {
    if (!parent.contains(event.target)) {
        burgerCloseHandler();
    }
}

document.addEventListener('click', handleClickOutside);

document.addEventListener('scroll', burgerCloseHandler);
