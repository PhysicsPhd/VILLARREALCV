/*
Esta función de JavaScript hace un fetch a partir de los links con información JSON de las imágenes incluídas en el footer.
Luego, extrae la información de las imágenes y las guarda en el Local Storage.
*/ 

const numberimgs = 3;
let infoimgs = [];
const linksforfetch = 
                  [
                        "https://api.jsonbin.io/v3/b/650f8a2712a5d3765982480e",
                        "https://api.jsonbin.io/v3/b/650f8a4354105e766fb8d54b",
                        "https://api.jsonbin.io/v3/b/650f8a840574da7622af6c59"
                  ]
for (let i = 0; i < numberimgs; i++) {
  fetch(linksforfetch[i])
    .then((response) => response.json())
    .then((json) => {
      infoimgs[i] = json.record;
      console.log(infoimgs);
      localStorage.setItem("infoimagenes", JSON.stringify(infoimgs));
    });
}