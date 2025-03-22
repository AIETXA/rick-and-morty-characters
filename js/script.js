//mostrar una lista de personajes con sus imágenes, nombres y especies.

//utilizar los botones "Previous Page" y "Next Page" para navegar entre las páginas de personajes.

const nextPage = document.getElementById('next-page');
const prevPage = document.getElementById('prev-page');
const listaPersonajes = document.getElementById('character-list');
let page = 1;

function obtenerPersonajes() {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error:${response.status}`)
        }
        return response.json()
    })
    .then(data => {
     listaPersonajes.innerHTML = ""
     data.results.forEach(personaje => {
        listaPersonajes.innerHTML += 
            `<div>
             <img src=${personaje.image} alt=${personaje.name}> 
             <h3>Name: ${personaje.name}</h3> 
             <p>Specie: ${personaje.species}</p>
             </div>`
           });   
        
     })
    .catch(error => console.error('Error:', error.message))    
        
 }
   
   obtenerPersonajes()    

prevPage.addEventListener('click', () => {
    page--
    obtenerPersonajes()    
})
nextPage.addEventListener('click', () => {
    page++
    obtenerPersonajes()    
})