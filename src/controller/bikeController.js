import express from 'express';
import Bike from "../models/Bike.js"

//Create 
export const create = async (req, res, next) => {
    const newBike = new Bike(req.body)
    // res.send("Hello this is bike endpoint!")
    try {
        const savedBike = await  newBike.save()
        res.status(200).json(savedBike)
    }catch(err) {
        res.status(500).json(err)
    }
}

//update
