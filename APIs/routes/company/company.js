const express = require('express')
const companyRoute=express.Router()



companyRoute.get('/:id',(req,res)=>{
    res.send(`this is campany 11111with id ${req.params.id} `)
})

companyRoute.post('/:id',(req,res)=>{
    res.send(`this is post campany with id ${req.params.id} `)
})


companyRoute.put('/:id',(req,res)=>{
    res.send(`this is put campany with id ${req.params.id} `)
})

companyRoute.delete('/:id',(req,res)=>{
    res.send(`this is put campany with id ${req.params.id} `)
})


module.exports =companyRoute