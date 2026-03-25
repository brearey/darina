document.addEventListener('DOMContentLoaded', function () {

    const albums = {
        business: {
            carouselId: '#carouselBusiness',
            inner: document.querySelector('#carouselBusiness .carousel-inner'),
            images: [
                'img/деловой стиль 1.jpg',
                'img/деловой стиль 2.jpg',
                'img/деловой стиль 3.jpg'
            ]
        },
        colors: {
            carouselId: '#carouselColors',
            inner: document.querySelector('#carouselColors .carousel-inner'),
            images: [
                'img/краски1.jpg',
                'img/краски2.jpg'
            ]
        },
        personal: {
            carouselId: '#carouselPersonal',
            inner: document.querySelector('#carouselPersonal .carousel-inner'),
            images: [
                'img/личное 1.jpg'
            ]
        }
    };

    function populateCarousel(album) {
        album.images.forEach((src, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = src;
            img.className = 'd-block w-100';
            img.alt = `Фотография ${index + 1}`;

            carouselItem.appendChild(img);
            album.inner.appendChild(carouselItem);
        });
    }

    populateCarousel(albums.business);
    populateCarousel(albums.colors);
    populateCarousel(albums.personal);

});
