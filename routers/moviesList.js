const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.status(200).send('List of Movies')
})

module.exports = router