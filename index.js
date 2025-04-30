/*const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Dotenv = require('dotenv')*/

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/userRoutes.js';

const app = express()
app.use(bodyParser.json())
dotenv.config();

const PORT = process.env.PORT || 2300 //import port
const MONGOURL = process.env.MONGO_URL //import mongodatabase

mongoose.connect(MONGOURL).then( () => {
    console.log("database connected suncissfully !")
    app.listen(PORT, ()=>{
        console.log(`surver running on ${PORT} !`)
        
    })
}).catch((error) => console.error(error)); 

app.get('/', (req,res)=>{
    res.send("hello")
})

app.use('/api/user', route)

