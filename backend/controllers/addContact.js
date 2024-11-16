import Contact from "../models/Contact.model.js";
const addContact=async(req,res)=>{
    
    const {firstName,lastName,email,phone,company,title}=req.body;
    try{
        const newContact=new Contact({firstName,lastName,email,phone,company,title});
        await newContact.save();
        res.status(201).json({message:"Contact added successfully"});
    }
    catch(error){
        console.log(error);
        res.sendStatus(500).json({message:"Something went wrong"});
    }
}

export default addContact