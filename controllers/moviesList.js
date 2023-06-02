const movieListModel = require('../models/moviesList')

const getAllMovies = async (request,response)=>{
    const movies = await movieListModel.find()
    try{
        response.status(200).json(movies)
    }
    catch(error)
    {
        response.send(500).json({message : error.message})
    }
}

const addAMovie = async (request,response)=>{
    const newMovie = new movieListModel({
        movieName : request.body.movieName,
        genre : request.body.genre,
        language : request.body.language,
        releasedYear : request.body.releasedYear,
        rating : request.body.rating,
    })
    try{
        const movie = await newMovie.save()
        response.json(movie)
    }
    catch(error)
    {
        response.json({message : error.message})
    }
}


const getAMovie =  (request,response)=>{
    response.status(200).json(response.movie)
}


const updateAMovie = async (request,response)=>{
    if(request.body.movieName != null)
    {
        response.movie.movieName = request.body.movieName
    }

    if(request.body.genre != null)
    {
        response.movie.genre = request.body.genre
    }
    
    if(request.body.language != null)
    {
        response.movie.language = request.body.language
    }
    
    if(request.body.rating != null)
    {
        response.movie.rating = request.body.rating
    }

    if(request.body.releasedYear != null)
    {
        response.movie.releasedYear = request.body.releasedYear

    }

    try{
        const updatedMovie = await response.movie.save()
        response.status(200).json(updatedMovie)
    }
    catch(error){
        response.status(500).json({message : error.message})
    }
    
    
}

const deleteAMovie = async (request,response)=>{
    try{
        await response.movie.deleteOne()
        response.json({message : `Deleted the user ${response.movie.movieName}`})
    }
    catch(error){
        response.status(500).json({message : error.message})
    }
}


async function getMovie(request,response,next){
    let movie 
    try{
        movie = await movieListModel.findById(request.params.id)
        if(movie == null)
        {
            return response.status(500).json({message : error.message})
        }

    }
    catch(error){
        return response.status(500).json({message : error.message})
    }

    response.movie = movie 
    next()
}



module.exports = {
        getAllMovies,
        addAMovie,
        getAMovie,
        updateAMovie,
        deleteAMovie,
        getMovie,  // function that finds the data by using id

    }