import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv/config';
import bikeRoutes from './src/routes/bike.js';
import config from 'config';





// const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// require('dotenv/config')
// const config = require('config')
const dbConfig = config.get('campus-bike-rent.dbConfig.dbName')

//import routes
// const bikeRoutes = require(`./src/routes/bike.js`)
// import bikeRoutes from "./src/routes/bike"


//connection to DB
const connect = async () =>{
    try{
        await mongoose.connect(dbConfig)
        console.log("Database Connected")
    } catch (error){
        throw error
    }
}

mongoose.connection.on("disconnected", () =>{
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected", () =>{
    console.log("mongoDB connected!")
})
// mongoose.connect(dbConfig).then(() => {
//     console.log("Database Connected")
// }).catch(err => {
//     console.log("Database not Connected"+err)
// })

// let db = mongoose.connection
// db.on("disconnect", () => console.log("Database Disconnected"))
// db.on('error', console.error.bind(console, 'Database connection error'))
// db.once('open', () => {
//     console.log("Database is connected");
// })


app.get("/", (req, res) =>{
    res.send("hello first request")
})

//middleware
app.use(express.json())
app.use("/bike", bikeRoutes)


//listen 
app.listen(process.env.PORT, () => {
    connect()
    console.log('connected to backend');
    console.log(process.env.PORT)
})