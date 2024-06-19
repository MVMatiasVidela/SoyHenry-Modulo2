const { Router } = require('express')
const moviesController = require ('../controllers/moviesController.js')
const { createMovieController } = require('../controllers/postMoviesController.js')
const {index} = require('../middlewares/index.js')
const moviesRouter = Router()

moviesRouter.get('/', moviesController)

moviesRouter.post('/',index, createMovieController )

module.exports =  moviesRouter


