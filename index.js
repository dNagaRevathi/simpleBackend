require('dotenv').config();
const express=require("express");
const port=4000;
const app=express();

app.get('/',(req,res)=>{
    res.send(`PORT is listening ${port}`);
})

app.get('/twitter',(req,res)=>{
    res.send("This is my Twitter");
})

app.get('/youtube',(req,res)=>{
    res.send("<h1>Chai aur code is working</h1>");
})
app.listen(process.env.PORT,()=>{
    console.log("port is running");
})
