const express = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    response.send("Display all available details")
})
router.post('/',(request,response)=>{
    response.send("Add a new detail")
})
router.get('/:id',(request,response)=>{
    response.send(`Display a detail with id ${request.params.id}`)
})
router.patch('/:id',(request,response)=>{
    response.send(`Update a detail with id ${request.params.id}`)
})
router.delete('/:id',(request,response)=>{
    response.send(`Display a detail with id ${request.params.id}`)
})




module.exports = router