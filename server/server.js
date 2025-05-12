const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require('./models/user');
const PORT = process.env.PORT || 5001 ; 

const app = express();
app.use(express.json());


app.post('/register',async(req , res)=>{
    try{
        const {username,email,password, DOB} =req.body ; 

        if(!username || !email || !password){
            return res.status(400).json({success :false, message: "All fields are mandatory"})
        }

        if(username){
            return res.status(400).json({success: false , message : " fill all the options "})
        }
        
        if(password.length< 8 || password.length > 16){
            return res.status(400).json({success : false , message : "password length should not be greater than 16 "})

        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({success : false , message : "email already exists , try with another "})
        }

        const newUser = new User({username,email,password,DOB});
        await User.save(newUser);


        return res.status(201).json({success :true , message : "user registered successfully "});


    }catch(error){
        return res.status(500).json({success: false , message : error.message})
    }
});

app.listen(PORT , ()=> {
    console.log(`server running http://localhost:${PORT}`);
})