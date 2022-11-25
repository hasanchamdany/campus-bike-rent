import express from "express";
import Booking from "../models/Booking.js";
import Bike from "../models/Bike.js";
import Member from "../models/Member.js";
import mongoose from "mongoose";
import {createError} from "../utils/error.js"




//Create
// export const createBooking = async (req, res, next) => {
//   const newBooking = new Booking(req.body);
//   // res.send("Hello this is Booking endpoint!")
//   try {
//     const savedBooking = await newBooking.save();
//     res.status(200).json(savedBooking);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

//Logic create Booking / Rent
export const createBooking = async (req, res, next) => {
  try {
    // const bike = await Bike.findOne({ _id: req.body._Id });


    const booking = new Booking({
      memberId: req.user.id,
      bikeId: req.body.bikeId,
      location: req.body.location,
      jam: req.body.jam,
      DateTake: new Date(),
      returnedStatus: false,
    });
    const result = await booking.save();

    // update availability bike status

    await Bike.updateOne(
      { _id: mongoose.Types.ObjectId(req.body.bikeId) },
      { availability: false },
      
    );

    // update member status booking
    
    const member = await Member.findOne({ _id: req.user.id });
    await Member.updateOne({ _id: req.user.id }, { bookingStatus: true });
    // const savedMember = await member.save()

    res.status(201).json(result);
    res.send("haloo cek cek")
  } catch (err) {
    // res.status(500).json(err);
    // res.status(500).send({ message: err.message });
    next(err);
    // next(createError(405, "Something went wrong can't booking bike"))
  }
};
//end Logic Booking / Rent

//return Bike Logic
export const returnBike = async (req, res, next) => {
    try{
        const result = await Booking.updateOne(
            {
                memberId: mongoose.Types.ObjectId(req.user.id),
                bikeId: mongoose.Types.ObjectId(req.body.bikeId),
                returnedStatus: false,
            },
            {
                returnedStatus: true,
            },
        )

        const bike = await Bike.findOne({ _id: req.body.bikeId})
        await Bike.updateOne(
            { _id: mongoose.Types.ObjectId(req.body.bikeId)},
            { availability: true}
        )

        const member = await Member.findOne({ _id: req.user.id})
        await Member.updateOne(
            { _id: mongoose.Types.ObjectId(req.user.id)},
            {bookingStatus: false}
        )

        res.status(200).json(result)

    }catch (err) {
        next(createError(406, "Something went wrong"));
    }
}
//end return Bike Logic

//update
export const updateBookingById = async (req, res, next) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete
export const deleteBookingById = async (req, res, next) => {
  try {
    await Booking.deleteOne({ _id: req.params.id });
    res.status(200).json("Booking has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};

//findById
export const findBookingById = async (req, res, next) => {
  try {
    // const Bookings = await Booking.findById(req.params.id);
    const Bookings = await Booking.findOne({memberId: req.params.id});
    res.status(200).json(Bookings);
  } catch (err) {
    res.status(500).json(err);
    console.error(err)
  }
};

//findAll (ADMIN)
export const findAllBookings = async (req, res, next) => {
  try {
    const Bookings = await Booking.find();
    res.status(200).json(Bookings);
  } catch (err) {
    res.status(500).json(err);
  }
};
