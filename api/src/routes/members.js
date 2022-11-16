import express from "express";
import Member from "../models/Member.js";
import {updateMemberById, deleteMemberById, findMemberById, findAllMembers} from "../controller/memberController.js";
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
router.put("/:id",  updateMemberById); //testing mode, re-activate auth when token already usable
// router.put("/:id", verifyUser, updateMemberById); 

//Delete
router.delete("/:id",verifyUser, deleteMemberById);

//findById
router.get("/:id", verifyUser, findMemberById);

//findAll
router.get("/",  findAllMembers); //testing mode
// router.get("/", verifyAdmin, findAllMembers);

router.get("/", async (req, res) => {
  res.send("hello this is member router endpoint!");
});

export default router;