const { getMoviesService} = require('../services/moviesService')

const moviesController = async(req, res) => {
    const movies = await getMoviesService()
    console.log(movies)
    res.status(200).send(movies)
}

module.exports = moviesController