// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const userRoute = require('./routes/user.router');
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

//dotenv configuration before use

dotenv.config();

//connection to cloud data base

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Database connected");
});

const app = express();
app.use(express.json())

//deploying server/

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});

//building routes

app.use('/backend/user', userRoute);
app.use('/backend/auth', authRouter)
