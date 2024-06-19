const Movies = require('../utils/classMovies')
const Movie = require('../models/Movie')
const moviesRouter = require('../routes/moviesRouter')



module.exports = {
    getMoviesService: async() =>{
        try {
            const movies = await Movie.find()
            return movies
        
        
        } catch (error) {
            throw error.message
        }
        
    },
     createMovie:async (movieData)=>{
      try {
        const newMovie = new Movie(movieData);
        const savedMovie = await newMovie.save();
        return savedMovie;
      } catch (error) {
        throw new Error('Error al crear la película');
      }
    }
    
  }


