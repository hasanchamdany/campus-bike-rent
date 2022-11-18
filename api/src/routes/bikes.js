import express from 'express';
import Bike from "../models/Bike.js";
import {createBike, updateBike, deleteBikeById, findBikeById, findAllBikes} from "../controller/bikeController.js";
import {verifyAdmin, verifyToken} from "../utils/verifyToken.js"

//cons express = require('express');
const router = express.Router()


//Create
//testing site without verifyToken re-activate when login token has been created
// router.post('/', verifyToken, verifyAdmin, createBike)
router.post('/',  createBike)



//Update
// router.put('/:id', verifyToken, verifyAdmin, updateBike) //re-activate after testing or fixed login token

// testing side
router.put('/:id',  updateBike)
router.delete('/:id', deleteBikeById)


//Delete
// router.delete('/:id',verifyToken, verifyAdmin, deleteBikeById) //re-activate after testing or fixed login token


//findById
router.get("/:id", findBikeById)

//findAll
router.get("/", findAllBikes)

router.get('/', async (req, res) => {
    res.send("hello this is bike router endpoint!")
})


export default router