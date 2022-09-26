import express from "express";
import Member from "../models/Member.js";
import * as controller from "../controller/memberController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
// const express = require('express');
const router = express.Router();

//Create 
// router.post("/", controller.create); // already use authentificated register in auth controller

router.get("/checkauthentification", verifyToken, (req, res, next) => {
  res.send("hello member, you are logged in!");
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello member, you are logged in and you can edit your profiles");
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can manage all members and also all bikes");
})

//Update
router.put("/:id", controller.updateById);

//Delete
router.delete("/:id", controller.deleteById);

//findById
router.get("/:id", controller.findById);

//findAll
router.get("/", controller.findAll);

router.get("/", async (req, res) => {
  res.send("hello this is member router endpoint!");
});

export default router;