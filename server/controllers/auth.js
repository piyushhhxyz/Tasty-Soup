const jwt = require("jsonwebtoken") 
const bcrypt = require("bcrypt")
const Users = require("../models/Users") 

// exports.signup = async(req,res) => {
//     const { username,password } = req.body 
//     const existingUser = await Users.findOne({ username }) 
//     if(existingUser) return res.status(400).json({message: "User Already Exists"}) 
        
//     const user = await Users.create({ username,password })
//     return res.status(200).json({status:"true" , user , message:"User Created Success"})
// }
exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await Users.findOne({ username });
        if (existingUser)  return res.status(400).json({ message: "User Already Exists" }) 

        if (username && username.trim() !== "") {
            Users.create({ username, password })
              .then(newUser => {
                console.log("User created:", newUser);
              })
              .catch(error => {
                console.error("Error creating user:", error);
              });
          } else {
            console.error("Username is required.");
          }          
        return res.status(200).json({ status: "true", user, message: "User Created Success" });
    }catch(e) {
        // console.error("Error:", e);
        res.status(500).json({ message: "Hamari Taraf se galtii" });
    }
};

exports.login = async(req,res) => {
    const { username,password } = req.body 
    const user = await Users.findOne({ username }) 
    if(!user) return res.status(400).json({message: "User Not Find"}) 
}