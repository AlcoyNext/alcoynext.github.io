window.addEventListener('load', function () {

    // DEVELOPMENT
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxjb3luZXh0IiwiYSI6ImNsanNhaWg5OTA0cnQzZnA5bjA2b2ZkNHYifQ.MWQzPqXVPqt3Kj0LxIWBdQ';
    // PRODUCTION
    //mapboxgl.accessToken = 'pk.eyJ1IjoiYWxjb3luZXh0IiwiYSI6ImNsanNiaHdhejA4eDMzZm4weGhqYTRnaHcifQ.37crDNKv4geComo0kCPQag';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [-0.47298, 38.69826],
        zoom: 13
    });

    map.addControl(new mapboxgl.NavigationControl());

})

