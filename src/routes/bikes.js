import express from 'express';
import Bike from "../models/Bike.js";
import * as controller from "../controller/bikeController.js";
// const express = require('express');
const router = express.Router()


//Create
router.post('/', controller.create)

//Update
router.put('/:id', controller.updateById)

//Delete
router.delete('/:id', controller.deleteById)

//findById
router.get("/:id", controller.findById)

//findAll
router.get("/", controller.findAll)

router.get('/', async (req, res) => {
    res.send("hello this is bike router endpoint!")
})


export default router