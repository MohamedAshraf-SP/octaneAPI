const express = require('express')
const carRoute=express.Router()

//"/api"+'/:id'
carRoute.get('/:carid',(req,res)=>{
    res.send(`this is car with id ${req.params.carid}` ) 
    //for company id :${req.params.companyid} `
})

carRoute.post('/:id',(req,res)=>{
    res.send(`this is post car with id ${req.params.id} `)
})


carRoute.put('/:id',(req,res)=>{
    res.send(`this is put car with id ${req.params.id} `)
})

carRoute.delete('/:id',(req,res)=>{
    res.send(`this is put car with id ${req.params.id} `)
})


module.exports =carRoute