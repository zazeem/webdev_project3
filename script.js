var map;
function initMap() {
  const mapEl = document.getElementById('map')
  var map = new google.maps.Map(document.getElementById('map'), { 
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  }); 
}
  const marker1 = new google.maps.Marker({
    map: map,
    position: { lat: 41.8781, lng: -87.6298 },
    title: "Illinois Institute of Technology",
    });

  const marker2 = new google.maps.Marker({
    map: map,
    position: { lat: 41.5643, lng: -87.8095 },
    title: "Tinley/80th Ave Station",
    
  const marker3 = new google.maps.Marker({
    map: map,
    position: { lat: 41.853703, lng: -87.6347661 },
    title: "Tinley/80th Ave Station",
  });
  