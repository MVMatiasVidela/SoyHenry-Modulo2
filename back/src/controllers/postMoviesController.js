// movieController.js

const { createMovie } = require('../services/moviesService');

async function createMovieController(req, res) {
  const { title, year, director, duration, rate, poster, genre } = req.body;

  try {
    const newMovie = await createMovie({ title, year, director, duration, rate, poster, genre });
    res.status(201).json({ message: 'Película creada correctamente', movie: newMovie });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la película' });
  }
}

module.exports = { createMovieController };