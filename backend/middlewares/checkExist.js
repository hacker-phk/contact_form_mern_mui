import Contact from "../models/Contact.model.js";
const checkExist=(req,res,next)=>{
    const {id}=req.params;
    if(!id){
        return res.status(400).json({message:"Contact id is required"});
    }
    if(!Contact.findById(id)){
        return res.status(404).json({message:"Contact not found"});
    }
    next();
}

export default checkExist