const mongoose = require('mongoose')
const moviesListSchema = new mongoose.Schema({

    movieName : {
        type : String,
        required : true, 
        unique : true,
    },
    genre : {
        type : String,
        required : true,
    },
    language : {
        type : String,
        required : true,
    },
    releasedYear : {
        type : Date,
        required : true,
    },
    rating : {
        type : Number,
        required : true,
    },
}) 

module.exports = mongoose.model('moviesListModel',moviesListSchema)