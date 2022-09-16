lat=  -31.732
long= -52.344

  var map = L.map('map').setView([lat, long], 15);
  var marker = L.marker([lat, long]).addTo(map);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
  }).addTo(map);