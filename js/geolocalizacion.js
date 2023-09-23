function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("demo").innerHTML = "La geolocalización no tiene soporte en este navegador.";
  }
}

function showPosition(position) {
    document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}