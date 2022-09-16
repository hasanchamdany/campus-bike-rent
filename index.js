const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//import routes
const bikeRoutes = require(`./src/routes/bike`)

//Routes 
app.get('/', (req, res) => {
    res.send('Routes Test');
});

//connection to DB
mongoose.connect(process.env.DB_CONNECTION)
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connection error'))
db.once('open', () => {
    console.log("Database is connected");
})

//listen 
app.listen(process.env.PORT, () => {
    console.log('running in ${process.env.PORT}');
})