import express from "express";
import Member from "../models/Member.js";
import * as controller from "../controller/bookingController.js";
import * as ver from "../utils/verifyToken.js";

// const express = require('express');
const router = express.Router();

//Create
router.post("/", controller.createBooking);


//Update
router.put("/:id", controller.updateBookingById);

//Delete
router.delete("/:id", controller.deleteBookingById);

//findById
router.get("/:id", controller.findBookingById);

//findAll
router.get("/", controller.findAllBookings);

router.get("/", async (req, res) => {
  res.send("hello this is booking router endpoint!");
}); 

export default router;