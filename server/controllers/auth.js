const jwt = require("jsonwebtoken") 
const bcrypt = require("bcrypt")
const Users = require("../models/Users") 

module.exports.signup = async(req,res) => {
    const { username,password } = req.body 
    const existingUser = await Users.findOne({ username }) 
    if(existingUser) return res.status(400).json({message: "User Already Exists"}) 
        
    const user = await Users.create({ username,password })
    return res.status(200).json({status:"true" , user , message:"User Created Success"})
}

module.exports.login = async(req,res) => {
    // const { username,password } = req.body 
    // const user = await Users.findOne({ username }) 
    // if(!user) return res.status(400).json({message: "User Not Find"}) 
}