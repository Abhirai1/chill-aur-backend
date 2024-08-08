// require('dotenv').config({path: './env'});
// ye ek tarka hai
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});





connectDB();