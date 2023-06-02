require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3500
const moviesList = require('./routers/moviesList')

app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error",(errorMessage)=> console.log(errorMessage))
db.once("open", ()=> console.log("Connection Established"))


app.get('/',(request,response)=>{
    response.status(200).send('This is App.js')
})

app.use('/api/v1/movieList',moviesList)

app.listen(PORT,console.log(`Server is running at http://localhost:${PORT}`))