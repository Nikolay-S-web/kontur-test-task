const header = document.querySelector('header');

const toggleHeaderSize = () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};
window.addEventListener('scroll', toggleHeaderSize);
