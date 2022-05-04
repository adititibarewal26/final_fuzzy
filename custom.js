// JavaScript for enabling the map on load. Change the access token and the web page.

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpdGktdGliYXJld2FsIiwiYSI6ImNrb3I3cHRqdDBrZnQyeW5sMnQ0azV6bHIifQ.02TDyY6RrupHOdMXTzeHZA';

window.onload = function() {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/aditi-tibarewal/cl2rkmatz000315oxg4ro6e4j', // style URL
    center: [77.0688997, 20.5272803], // starting position [lng, lat]
    zoom: 4 // starting zoom
  });
};
