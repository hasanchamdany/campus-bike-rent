import express from "express";
import Member from "../models/Member.js";
import * as controller from "../controller/memberController.js";
// const express = require('express');
const router = express.Router();

//Create
router.post("/", controller.create);

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