$('[data-fancybox]').fancybox();

$('#contactForm').on('submit', function (event) {
    event.preventDefault();
    alert('Звонок заказан!');
    $.fancybox.close();
});

$('.button--call').on('click', function () {
    $.fancybox.open({
        src: '#formModal',
        type: 'inline',
    });
});
