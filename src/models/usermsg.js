const express = require("express");
const mongoose = require("mongoose");
const validator =require("validator");

const userSchema = mongoose.Schema({
      name:{
        type:String,
        required:true,
        minLength:2
      },
      email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(" invalid email id");
            }
        }
      },
      phone:{
        type:Number,
        required:true,
        minLength:10
      },
      messege:{
        tyrpe:String,
        
      },
      date:{
        type:Date,
        default:Date.now
      }
});


const User = mongoose.model("USer",userSchema);
module.exports = User;