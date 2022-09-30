import express from "express";
import Member from "../models/Member.js";
import {createBooking, updateBookingById, deleteBookingById, findBookingById, findAllBookings, create} from "../controller/bookingController.js";
import {verifyToken} from "../utils/verifyToken.js";

// const express = require('express');
const router = express.Router();

//Create
router.post("/", verifyToken, createBooking);

//Update
router.put("/:id", verifyToken, updateBookingById);

//Delete
router.delete("/:id", verifyToken, deleteBookingById);

//findById
router.get("/:id", verifyToken, findBookingById);

//findAll
router.get("/", verifyToken, findAllBookings);

router.get("/", async (req, res) => {
  res.send("hello this is booking router endpoint!");
}); 

export default router;