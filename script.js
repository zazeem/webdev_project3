function initMap() {
	const mapEl = document.getElementById('map')
  mapOptions = {
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  }		
  
	var map = new google.maps.Map(mapEl, mapOptions);	
	
  const marker = new google.maps.Marker({
    map: map,
		position: { lat: 41.5643, lng: -87.8095 },
		animation: google.maps.Animation.BOUNCE,
		title: "Tinley/80th Ave Station",
    });

  const marker = new google.maps.Marker({
    map: map,
		position: { lat: 41.5643, lng: -87.8095 },
		animation: google.maps.Animation.BOUNCE,
		title: "Tinley/80th Ave Station",
  });
	