import mongoose from "mongoose";

const ContactSchema=new mongoose.Schema({

    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    company:{type:String,required:true},
    title:{type:String,required:true},
});
const Contact=mongoose.model("contact",ContactSchema);

export default Contact