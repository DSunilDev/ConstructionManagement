const express=require('express')
const path=require('path')
const fs=require('fs')

const app=express();

app.use(express.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Static Folders

app.use(express.static('img'));
app.use(express.static('videos'));
app.use(express.static('css'));

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

//Project Log for Admin Users

app.get('/projectlog',function(req,res)
{
    res.render('project')
})


//Form for customer to submit the data

app.get('/contact',function(req,res)
{
    res.render('contact')
})

//Messages from Customer

app.get('/Messages',function(req,res)
{
    res.render('messages')
})

//About the Software Page

app.get('/about',function(req,res)
{
    res.render('about')
})

//Task addition 

app.get('/newproject',function(req,res)
{
    res.render('createproject')
})

//Dashboard
app.get('/dashboard',function(req,res)
{
    res.render('dashboard')
})

//AddStake Holder 

app.get('/addstakeholder',function(req,res)
{
    res.render('addstakeholder')
})



app.use(function(req,res)
{
    res.render("404");
})

app.listen(500)