import Contact from "../models/Contact.model.js";

const deleteContact=async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    try{
        await Contact.findByIdAndDelete(id);
       return res.json({message:"Contact deleted successfully"});
    }
    catch(error){
        console.log(error);
      return  res.sendStatus(500).json({message:"Something went wrong"});
    }
}

export default deleteContact