const express = require('express')
const app= express()
const phones = require('./phones.json')
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello Bangladesh I love My country good look')
})
app.get('/phones',(req,res)=>{
    res.send(phones)
})
app.get('/phones/:id',(req,res)=>{
    const id =parseInt(req.params.id)
    const phone = phones.find(phone=>phone.id ===id ) || {}
    res.send(phone)
})

app.listen(port,()=>{
    console.log('There the port number is :',port)
})