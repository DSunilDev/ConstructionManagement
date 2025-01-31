const express=require('express')
const path=require('path')
const fs=require('fs')

const app=express();

app.use(express.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


//Home Page Route

app.get('/',function(req,res)
{
    res.render('index')
})





app.use(function(req,res)
{
    res.render("404");
})

app.listen(500)