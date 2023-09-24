/*
async function loadNames() {
        const response = await fetch('https://api.jsonbin.io/v3/b/650f8a2712a5d3765982480e');
        const names = await response.json();
      
        console.log(names);
        console.log(names.record.srctext); 
        // logs [{ name: 'Joker'}, { name: 'Batman' }]
      }
      
      loadNames();
*/
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => console.log(json));