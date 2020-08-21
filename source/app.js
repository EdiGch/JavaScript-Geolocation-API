import "https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js";

const cordinates = [
    // [53.007355, 23.043303],
    // [53.008788, 23.044891],
    // [53.009485, 23.048152],
    // [53.010376, 23.052551],
    // [53.010376, 23.056006],


    [23.043303, 53.007355],
    [23.042448, 53.008076],
    [23.042223, 53.008212],
    [23.044891, 53.008788],
    [23.048152, 53.009485],
    [23.052551, 53.010376],
    [23.054700, 53.010974],
    [23.056009,53.011704],
    [23.054958,53.015086],
    [23.047220,53.013727],
];



// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com



mapboxgl.accessToken = 'pk.eyJ1IjoiZWRpMDMzIiwiYSI6ImNrZTNhN2gwYTBoZHQyemxmdHNtOGtuZWMifQ.kDXXlqNnxhFtNrAVWScvlQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [23.043303, 53.007355],
    zoom: 15
});
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': cordinates
            }
        }
    });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 8
        }
    });
});