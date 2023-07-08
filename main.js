
// DEVELOPMENT
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxjb3luZXh0IiwiYSI6ImNsanNhaWg5OTA0cnQzZnA5bjA2b2ZkNHYifQ.MWQzPqXVPqt3Kj0LxIWBdQ';
// PRODUCTION
//mapboxgl.accessToken = 'pk.eyJ1IjoiYWxjb3luZXh0IiwiYSI6ImNsanNiaHdhejA4eDMzZm4weGhqYTRnaHcifQ.37crDNKv4geComo0kCPQag';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alcoynext/cljsfzfr9019401p596srfj11',
    center: [-0.47298, 38.69826],
    zoom: 12,
    language: 'es'
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.ScaleControl());
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
    })
);

map.on('load', () => {

});

map.on('idle', () => {

});

/* Mapbox Directions */
function direction_tools() {
    route = document.querySelector("#route");

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/walking',
            language: 'es',
            steps: true
        }),
        'top-right'
    );
}

/* Mapbox Geocoder */
function search_tools() {
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            language: 'es'
        }),
        'top-right'
    );
}