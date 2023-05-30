const express = require("express")
const app = express()
const PORT = 3500

app.get('/',(request,response)=>{
    response.status(200).send("This is app.js")
})

app.listen(PORT,console.log(`The server is running at http://localhost:${PORT}`))

console.log("This is student enrollment")