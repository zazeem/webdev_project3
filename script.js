const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
var map;

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