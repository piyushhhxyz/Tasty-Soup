const jwt = require("jsonwebtoken") 
const bcrypt = require('bcrypt');
const Users = require("../models/Users") 

module.exports.signup = async(req,res) => {
    try{
        const { username,password } = req.body 
        const existingUser = await Users.findOne({ username }) 
        if(existingUser) return res.status(400).json({message: "User Already Exists"}) 
    
        // const hashedPassword = await bcrypt.hash(password, 10) ;
        // console.log(hashedPassword) ;
        const user = await Users.create({ username,password })
        return res.status(200).json({status:"true" , user , message:"User Created Success"})
    }
    catch(e) {
        console.log(e) 
        return res.status(500).json({message:"SERVER eRrrior"}) 
    }
}

module.exports.login = async(req,res) => {
    const { username,password } = req.body 
    const user = await Users.findOne({ username }) 
    if(!user) return res.status(400).json({message: "User Not Found, Please Signup First"})
    
    if(user.password != password) return res.status(400).json({message: "Incorrect Password"})
    return res.status(200).json({message:"Logged IN Successfully"})
}