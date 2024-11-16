import Contact from "../models/Contact.model.js";
const duplicateCheck=async(req,res,next)=>{
    const {email}=req.body;
    if(!email){
        return res.status(400).json({message:"Email is required"});
    }
    const existingUser= await Contact.findOne({email:email});
    if(existingUser){
        console.log(existingUser);
        return res.status(400).json({message:"Email already exists"});
    }
    next();
}

export default duplicateCheck