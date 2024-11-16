import Contact from "../models/Contact.model.js";
const getAllContacts=async(req,res)=>{
    try {
        const contacts=await Contact.find();
        res.json(contacts);
    } catch (error) {
        console.log(error);
    }
}

export default getAllContacts;