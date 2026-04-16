var map;
async function initMap() {
	map = new google.maps.Map(document.getElementById('map')) 
	center: {lat: -34.397, lng: 150.644};
	center: {lat: -34.397, lng: 150.644};
	zoom: 8;
});	
}
const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
async function routeMarkers() {
  const map = new Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 41.5643, lng: 87.8095 },
      zoom: 1,
      mapId: 'DEMO_MAP_ID',
  });
};

async function campus() {
  const map = new Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 41.5643, lng: 87.8095 },
      zoom: 1,
      mapId: 'DEMO_MAP_ID',
  });
};