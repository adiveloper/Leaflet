var map = L.map('leaflet', {
  'center': [30.6190,-96.3388],
  'zoom': 14,
  'layers': [
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      'attribution': 'Map data &copy; OpenStreetMap contributors'
    })
  ]
});

map.on('click', function(e) {
	var latlng = map.mouseEventToLatLng(e.originalEvent)
	console.log(latlng.lat + ', ' + latlng.lng);	
});


var polyline = new L.Polyline([]).addTo(map);

map.on('click', function(event) {

  new L.Marker(event.latlng).addTo(map);
  polyline.addLatLng(event.latlng);
  
});

