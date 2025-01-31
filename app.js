const express=require('express')
const path=require('path')
const fs=require('fs')

const app=express();

app.use(express.urlencoded({extended:true}))












app.use(function(req,res)
{
    res.render("404");
})

app.listen(500)