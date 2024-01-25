import mongoose from "mongoose";
import Jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    avatar:{
        type:String,
        required:true
    },
    coverImage:{
        type:String,   
    },
    watchHistory:{
        type:object.Schema.type.id,
        ref:'Videos'
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})


const User = mongoose.model("User",userSchema);

module.exports={
  User
}