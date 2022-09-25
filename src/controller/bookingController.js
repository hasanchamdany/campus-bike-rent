import express from 'express';
import Booking from "../models/Booking.js"

//Create 
export const create = async (req, res, next) => {
    const newBooking = new Booking(req.body)
    // res.send("Hello this is Booking endpoint!")
    try {
        const savedBooking = await  newBooking.save()
        res.status(200).json(savedBooking)
    }catch(err) {
        res.status(500).json(err)
    }
}

//update
export const updateById = async (req, res, next) => {
    try {
        const updatedBooking = await  Booking.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedBooking)
    }catch(err) {
        res.status(500).json(err)
    }
}

//delete
export const deleteById = async (req, res, next) => {
    try {
        await  Booking.deleteOne({_id: req.params.id})
        res.status(200).json("Booking has been deleted.")
    }catch(err) {
        res.status(500).json(err)
    }
}

//findById
export const findById = async (req, res, next) => {
    try {
        const Booking = await  Booking.findById(req.params.id)
        res.status(200).json(Booking)
    }catch(err) {
        res.status(500).json(err)
    }
}

//findAll
export const findAll = async (req, res, next) => {
    try {
        const Bookings = await  Booking.find()
        res.status(200).json(Bookings)
    }catch(err) {
        res.status(500).json(err)
    }
}