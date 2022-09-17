const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')
const config = require('config')
const dbConfig = config.get('campus-bike-rent.dbConfig.dbName')

//import routes
const bikeRoutes = require(`./src/routes/bike.js`)

//connection to DB
mongoose.connect(dbConfig).then(() => {
    console.log("Database Connected")
}).catch(err => {
    console.log("Database not Connected"+err)
})

let db = mongoose.connection
db.on("disconnect", () => console.log("Database Disconnected"))
db.on('error', console.error.bind(console, 'Database connection error'))
db.once('open', () => {
    console.log("Database is connected");
})


//middleware
app.use("/bike", bikeRoutes)


//listen 
app.listen(process.env.PORT, () => {
    console.log('running in ${process.env.PORT}');
})