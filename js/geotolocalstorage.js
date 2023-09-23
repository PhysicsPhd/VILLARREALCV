function getLocation() {
    navigator.geolocation.getCurrentPosition(savePosition);
  }

function savePosition(position) {
    localStorage.setItem("latitud", position.coords.latitude);
    localStorage.setItem("longitud", position.coords.longitude);
}