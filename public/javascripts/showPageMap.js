

const goodRestaurant = JSON.parse(restaurant);
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: goodRestaurant.geometry.coordinates, // starting position [lng, lat]
zoom: 9 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl(), 'top-left');

new mapboxgl.Marker()
.setLngLat(goodRestaurant.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({ offset: 25 })
        .setHTML(
            `<h3>${goodRestaurant.title}</h3><p>${goodRestaurant.location}</p>`
        )
)
.addTo(map);