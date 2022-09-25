import express from "express";
import Member from "../models/Member.js";

//Create
export const create = async (req, res, next) => {
  const newMember = new Member(req.body);
  // res.send("Hello this is member endpoint!")
  try {
    const savedMember = await newMember.save();
    res.status(200).json(savedMember);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update
export const updateById = async (req, res, next) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedMember);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete
export const deleteById = async (req, res, next) => {
  try {
    await Member.deleteOne({ _id: req.params.id });
    res.status(200).json("Member has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};

//findById
export const findById = async (req, res, next) => {
  try {
    const member = await Member.findById(req.params.id);
    res.status(200).json(member);
  } catch (err) {
    res.status(500).json(err);
  }
};

//findAll
export const findAll = async (req, res, next) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json(err);
  }
};
