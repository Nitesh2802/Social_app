import mongoose from "mongoose";

const userSchema=new  mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    socialMediaHandle:{
        type:String,
        required:true,
    },
    images:{
        type:[String],
    }
},{timestamps:true});

export const User=new mongoose.model("User",userSchema);