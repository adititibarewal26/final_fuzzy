// JavaScript for enabling the map on load. Change the access token and the web page.

mapboxgl.accessToken = 'Change HERE';

window.onload = function() {
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'Change HERE', // style URL
    center: [77.0688997, 20.5272803], // starting position [lng, lat]
    zoom: 4 // starting zoom
  });
};
