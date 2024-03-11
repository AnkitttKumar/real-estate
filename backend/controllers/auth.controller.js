import User from "../models/user.model.js"
import bcryptjs from  'bcryptjs'
export const signup = async (req,res)=>{
    const {username, email, password} =  req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    try {
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json("User created successfully");
      } catch (error) {
        if (error.code === 11000) {
          // Duplicate key error
          res.status(400).json("Duplicate key error: Username or email already exists");
        } else {
          // Other MongoDB errors
          console.error("MongoDB error:", error.message);
          res.status(500).json("Internal Server Error");
        }
      }
    };