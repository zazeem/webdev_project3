function initMap() {
  const el = document.getElementById("map");

  const myLocation = new google.maps.LatLng(
    41.5643,
    -87.8095
  );

  const mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  const myMap = new google.maps.Map(el, mapOptions);

  const marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: "star.jpg"
  });
  
  const infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener("mouseover", function () {
    infowindow.open(myMap, marker);
  });
}

const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

console.log(slider, prev, next);

if (slider && prev && next) {
  const images = [
    "media/skyline.jpg",
    "media/chinatown.jpg",
    "media/ferris.jpg"
  ];

  const altText = [
    "A photo of a building in Chicago",
    "A photo of people walking around during a festival",
    "A photo of the ferris wheel at Navy Pier"
  ];

  let currentIndex = 0;

  function showImage(index) {
    slider.src = images[index];
    slider.alt = altText[index];
  }

  next.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex); 
  });
  
  prev.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  });
}