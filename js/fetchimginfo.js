const numimagenes=3;

fetch('https://drive.google.com/file/d/15pJi5cTI39lS1c_SUkIV9rWjSuXjbLoR/view?usp=sharing')
        .then(response => response.json())
        .then(json => console.log(json))