require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
var cookieParser = require('cookie-parser')

const {login,helloController }= require('./contollers/auth')
const connection = require("./db/mysql")
app.use(cookieParser())
app.use(express.json())



//ROUTES

app.get('/hello',helloController)


connection.connect(function (err) {
    if(err){
        console.log("error occured while connecting");
        console.log('eoor : ',err)
    }
    else{
        console.log("connection created with Mysql successfully");
    }
 });

app.listen(4000)