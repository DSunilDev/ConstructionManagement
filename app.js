const express=require('express')
const path=require('path')
const fs=require('fs')

const app=express();

app.use(express.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


//Home Page Route - Acts as Dashboard of the Software 

app.get('/',function(req,res)
{
    res.render('index')
})

//Users Signup and Login Route

app.get('/signup',function(req,res)
{
    res.render('signup')
})

app.get('/login',function(req,res){
    res.render('login')
})


//About the Software Page

app.get('/about',function(req,res)
{
    res.render('about')
})


app.use(function(req,res)
{
    res.render("404");
})

app.listen(500)