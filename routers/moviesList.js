const express = require('express')
const router = express.Router()
const movieListModel = require('../models/moviesList')
const {getAllMovies, addAMovie, getMovie, getAMovie, updateAMovie, deleteAMovie } = require('../controllers/moviesList')

router.route('/').get(getAllMovies).post(addAMovie)

router.route('/:id').get(getMovie, getAMovie).patch(getMovie, updateAMovie).delete(getMovie, deleteAMovie)







module.exports = router