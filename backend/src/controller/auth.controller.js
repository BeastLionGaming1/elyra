import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/User.js";

dotenv.config({ quiet: true });

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }
    
    const user = await User.findOne({ email });
    
    if (!user) {
     return res.status(404).json({
       success: false,
       message: "User not found!"
     });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status().json({
        success: false,
        message: "Invalid Credentials"
      });
    }
    
    const token = jwt.sign(
      {
      id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    
    res.status(200).json({
      success: true,
      message: "Login Successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
        password: user.password,
      },
    });
  }catch(error) {
    console.error("Login Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    
    const isExisting = await User.findOne({
      $or: [{ email }, { username }],
    });
    
    if (isExisting) {
      console.log("User already exists, Please Try Again Later!");
      return res.status(409).json({ 
        success: false,
        message: "User already exists!"
        });
    }
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
  
    const token = jwt.sign(
      {
        id: newUser._id,
      },
        process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
  
    res.status(201).json({
      success: true,
      message: "Account created successfully",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  }catch (error) {
    console.error("Signup Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  }catch(error) {
    console.error("Get Users Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export const profile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
}