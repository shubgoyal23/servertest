const express = require('express')
const app = express()

const port = 3000
app.listen(port, ()=>{
    console.log('app running')
})

app.get("/", (req, res) =>{
    res.send("yes this is working")
})