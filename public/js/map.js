mapboxgl.accessToken = mapToken;

// Default fallback coordinates (Delhi)
let centerCoords = [77.2090, 28.6139];

if (listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length === 2) {
    centerCoords = listing.geometry.coordinates;
}

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: centerCoords,
    zoom: 9
});

// Custom icon
let customMarker = document.createElement('img');
customMarker.src="/js/compass-regular-full.png";
customMarker.style.width = "40px";
customMarker.style.backgroundColor = 'black';
customMarker.style.borderRadius = "50%";
customMarker.style.padding = '4px';
customMarker.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)";

// Add marker only if coordinates exist
if (listing.geometry && listing.geometry.coordinates) {
    new mapboxgl.Marker({ element: customMarker })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`)
                .setMaxWidth("300px")
        )
        .addTo(map);
}
