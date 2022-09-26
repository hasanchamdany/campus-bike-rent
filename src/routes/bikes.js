import express from 'express';
import Bike from "../models/Bike.js";
import * as controller from "../controller/bikeController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

//cons express = require('express');
const router = express.Router()


//Create
router.post('/', verifyAdmin, controller.createBike)


//Update
router.put('/:id', verifyAdmin, controller.updateBike)


//Delete
router.delete('/:id', verifyAdmin, controller.deleteBikeById)


//findById
router.get("/:id", controller.findBikeById)

//findAll
router.get("/", controller.findAllBikes)

router.get('/', async (req, res) => {
    res.send("hello this is bike router endpoint!")
})


export default router