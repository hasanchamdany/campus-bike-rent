import express from "express";
import Member from "../models/Member.js";
import { updateBookingById, deleteBookingById, findBookingById, findAllBookings,  createBooking, returnBike} from "../controller/bookingController.js";
import {verifyToken} from "../utils/verifyToken.js";

// const express = require('express');
const router = express.Router();

//Create
router.post("/", verifyToken, createBooking);

//Update
router.put("/:id",  updateBookingById); // testing mode, re-activate when auth token already accessible
// router.put("/:id", verifyToken, updateBookingById);
router.put("/return/:id", verifyToken, returnBike)

//Delete
router.delete("/:id", verifyToken, deleteBookingById);

//findById
router.get("/:id", verifyToken, findBookingById);

//findAll
// router.get("/", verifyToken, findAllBookings);

//testing site without verifyToken re-activate when login token has been created
router.get("/", findAllBookings)

router.get("/", async (req, res) => {
  res.send("hello this is booking router endpoint!");
}); 

export default router;