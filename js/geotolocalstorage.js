// Esta función de JavaScript guarda la latitud y la longitud del usuario en Local Storage

function getLocation() {
    navigator.geolocation.getCurrentPosition(savePosition);
  }

function savePosition(position) {
    localStorage.setItem("latitud", position.coords.latitude);
    localStorage.setItem("longitud", position.coords.longitude);
}