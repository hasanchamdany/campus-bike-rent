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
export const updateById = async (req, res, next) => {
    try {
        const updatedBike = await  Bike.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedBike)
    }catch(err) {
        res.status(500).json(err)
    }
}

//delete
export const deleteById = async (req, res, next) => {
    try {
        await  Bike.deleteOne({_id: req.params.id})
        res.status(200).json("Bike has been deleted.")
    }catch(err) {
        res.status(500).json(err)
    }
}

//findById
export const findById = async (req, res, next) => {
    try {
        const bike = await  Bike.findById(req.params.id)
        res.status(200).json(bike)
    }catch(err) {
        res.status(500).json(err)
    }
}

//findAll
export const findAll = async (req, res, next) => {
    try {
        const bikes = await  Bike.find()
        res.status(200).json(bikes)
    }catch(err) {
        res.status(500).json(err)
    }
}