import express from 'express';
import Bike from "../models/Bike.js";
import * as controller from "../controller/bikeController.js";
import * as verify from "../utils/verifyToken.js"

//cons express = require('express');
const router = express.Router()


//Create
router.post('/', controller.createBike)


//Update
router.put('/:id', controller.updateBike)


//Delete
router.delete('/:id', controller.deleteBikeById)


//findById
router.get("/:id", controller.findBikeById)

//findAll
router.get("/", controller.findAllBikes)

router.get('/', async (req, res) => {
    res.send("hello this is bike router endpoint!")
})


export default router