const express = require('express')
const router = express.Router()
const movieListModel = require('../models/moviesList')

router.get('/',(request,response)=>{
    response.status(200).send('List of Movies')
})

module.exports = router