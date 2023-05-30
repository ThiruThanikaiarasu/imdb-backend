const express = require("express")
const app = express()
const PORT = 3500
const students = require('./routers/students')


app.get('/',(request,response)=>{
    response.status(200).send("This is app.js")
})

app.use('/api/v1/students',students)

app.listen(PORT,console.log(`The server is running at http://localhost:${PORT}`))

