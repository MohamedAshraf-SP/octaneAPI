// 
const express = require ("express")
const api =require('./routes/api')
const app = express()

require(`dotenv`).config()           // to read from .env file 
const PORT= process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use("/api",api) // if any request with the url api use router


app.listen(PORT,(req,res)=>{
    console.log(`server is listining on port ${PORT}`)
})