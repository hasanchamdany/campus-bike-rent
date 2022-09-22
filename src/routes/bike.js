import express from 'express';
import Bike from "../models/Bike.js"
// const express = require('express');
const router = express.Router()


//Create
router.post('/', async (req, res) => {

    const newBike = new Bike(req.body)
    res.send("Hello this is bike endpoint!")
    try {
        const savedBike = await  newBike.save()
        res.status(200).json(savedBike)
    }catch(err) {
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    res.send("hello this is bike router endpoint!")
})


export default router