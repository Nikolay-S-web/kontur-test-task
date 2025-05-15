ymaps.ready(init);
function init() {
    const Map = new ymaps.Map('map', {
        center: [55.028894, 82.926493],
        zoom: 15,
        controls: [],
    });

    const CoDe = new ymaps.Placemark([55.028894, 82.926493], {
        hintContent: 'CoDe',
        balloonContent: 'Школа программирования CoDe<br> Депутатская, 46',
    });

    Map.geoObjects.add(CoDe);
}
