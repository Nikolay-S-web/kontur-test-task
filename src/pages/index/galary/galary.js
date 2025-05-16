const galaryItems = document.querySelectorAll('.galary__item');

$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({
        buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
    });
});

galaryItems.forEach((galaryItem) => {
    const src = galaryItem.querySelector('.galary__image').src;
    console.log(src);
    galaryItem.setAttribute('href', src);
});
