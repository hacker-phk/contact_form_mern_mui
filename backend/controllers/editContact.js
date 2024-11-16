import Contact from "../models/Contact.model.js";
const editContact=async(req,res)=>{

    const {firstName,lastName,email,phone,company,title}=req.body;
    const {id}=req.params;
    try{
        const contact=await Contact.findById(id);
        contact.firstName=firstName;
        contact.lastName=lastName;
        contact.email=email;
        contact.phone=phone;
        contact.company=company;
        contact.title=title;
        await contact.save();
        res.json({message:"Contact updated successfully"});
    }
    catch(error){
        console.log(error);
        res.sendStatus(500).json({message:"Something went wrong"});
    }
}

export default editContact