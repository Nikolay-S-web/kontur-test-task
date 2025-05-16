const buttons = document.querySelectorAll('.button');

function addActive(element) {
    element.classList.add('active');
}

function removeActive(element) {
    element.classList.remove('active');
}

function checkActive(element) {
    return element.classList.contains('active');
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (checkActive(button)) return;
        addActive(button);
        setTimeout(() => {
            removeActive(button);
        }, 400);
    });
});
