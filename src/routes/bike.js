import express from 'express';
import Bike from "../models/Bike.js";
import * as controller from "../controller/bikeController.js";
// const express = require('express');
const router = express.Router()


//Create
router.post('/:id?', controller.create)

//Update

router.get('/', async (req, res) => {
    res.send("hello this is bike router endpoint!")
})


export default router