// Метка для карты контактов
const PLACEMARK_CONTACT = {
    lalitude: 55.803929,
    longitude: 37.582251
};

function removeControls(map) {
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('rulesControl');
}

// Код для карты контактов
function initContactsMap() {
    const contactsMap = new ymaps.Map('map', {
        center: [PLACEMARK_CONTACT.lalitude, PLACEMARK_CONTACT.longitude],
        zoom: 15
    });

    const contactsPlacemark = new ymaps.Placemark(
        [PLACEMARK_CONTACT.lalitude, PLACEMARK_CONTACT.longitude],
        {},
        {
            hideIconOnBalloonOpen: false,
            iconLayout: 'default#image',
            iconImageHref: './img/icons/placemark.svg',
            iconImageSize: [97, 97]
        }
    );

    contactsMap.geoObjects.add(contactsPlacemark);

    removeControls(contactsMap);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('map')) {
        ymaps.ready(initContactsMap);
    }
});
