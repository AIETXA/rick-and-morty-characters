//mostrar una lista de personajes con sus imágenes, nombres y especies.

//utilizar los botones "Previous Page" y "Next Page" para navegar entre las páginas de personajes.

const listaPersonajes = document.getElementById('character-list');

fetch(`https://rickandmortyapi.com/api/character/?page=${location}`)
   .then(response => response.json())
   .then(data => {
    let personajes = data.result.forEach(character => character.innerHTML += `<li>${character.image}</li> <li><h3>${character.name}</h3></li>`);
   return (personajes);
});
