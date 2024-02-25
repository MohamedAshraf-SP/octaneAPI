const express = require('express')
const accountRoute=express.Router()
const {addAccount,getAccount,editAccount,deleteAccount}= require("./../../Controllers/accountctrl")




//"/api/campany


//"/api"+'/:id'
accountRoute.get('/:id',getAccount)

accountRoute.post('/:id',(req,res)=>{

    res.send(`this is post account with id ${req.params.id} `)
})


accountRoute.put('/:id',(req,res)=>{
    res.send(`this is put account with id ${req.params.id} `)
})

accountRoute.delete('/:id',(req,res)=>{
    res.send(`this is put account with id ${req.params.id} `)
})


module.exports =accountRoute