// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const userRoute = require('./routes/user.router');
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from './routes/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Database connected");
});

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});

app.use('/backend/user', userRoute);


