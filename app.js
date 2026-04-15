const express = require('express')
const app = new express()
const PORT = 6969
app.get('/', (req,res)=>{
    res.send("hello world")
})

app.listen(PORT)
console.log("the app is running on port: ", PORT)