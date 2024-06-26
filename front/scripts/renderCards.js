const contenedorPeliculas = document.getElementById("contMovies");


const renderCards = (data)=>{
    data.forEach(pelicula => {

        const peliculaDiv = document.createElement("div");
peliculaDiv.classList.add("pelicula");

const titulo = document.createElement("h4");
titulo.textContent = pelicula.title;

const director = document.createElement("p");
director.textContent = "Director:" + pelicula.director;

const duracion = document.createElement ("p");
duracion.textContent = "Duración:" + pelicula.duration;

const genero = document.createElement ("p");
genero.textContent = "Género:" + pelicula.genre.join(", ");

const calificacion = document.createElement ("p");
calificacion.textContent = "Calificación:" + pelicula.rate;

const imagen = document.createElement("img");
imagen.src = pelicula.poster;
imagen.alt = pelicula.title;


 



peliculaDiv.appendChild(imagen);
peliculaDiv.appendChild(titulo);
peliculaDiv.appendChild(director);
peliculaDiv.appendChild(duracion);
peliculaDiv.appendChild(genero);
peliculaDiv.appendChild(calificacion);


contenedorPeliculas.appendChild(peliculaDiv);
});
};


module.exports = renderCards;