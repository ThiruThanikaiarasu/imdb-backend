const mongoose = require('mongoose')
const moviesListSchema = new mongoose.Schema({

    movieName : {
        type : String,
        require : true, 

    },
    genre : {
        type : String,
        require : true,
    },
    language : {
        type : String,
        require : true,
    },
    releasedYear : {
        type : Date,
        require : true,
    },
    rating : {
        type : Number,
        require : true,
    },
}) 

module.exports = mongoose.model('moviesListModel',moviesListSchema)