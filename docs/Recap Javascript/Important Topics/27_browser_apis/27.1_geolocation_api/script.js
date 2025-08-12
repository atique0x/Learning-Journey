console.log(navigator.geolocation);
let initialZoom = 10;
//navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
function showLocation(z = 10) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat, long);
        const map = document.getElementById("mapId");
        map.setAttribute(
          "src",
          `https://maps.google.com/maps?q=${lat},${long}&z=${z}&output=embed`
        );
      },
      (error) => {
        console.error("Error getting location:", error.message);
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function zoomIn() {
  initialZoom++;
  if (initialZoom > 15) {
    alert("You get the highest limit");
    return;
  }
  showLocation(initialZoom);
}

function zoomOut() {
  initialZoom--;
  if (initialZoom < 5) {
    alert("You get the highest limit");
    return;
  }
  showLocation(initialZoom);
}
