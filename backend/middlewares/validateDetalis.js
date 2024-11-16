const validateDetails=(req,res,next)=>{
const {firstName,lastName,email,phone,company,title}=req.body;
if(!firstName||!lastName||!email||!phone||!company||!title){
    return res.status(400).json({message:"All fields are required"});
}
const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!emailRegex.test(email)){
    return res.status(400).json({message:"Invalid email"});
}
const phoneRegex=/^\d{10}$/;
if(!phoneRegex.test(phone)){
    return res.status(400).json({message:"Invalid phone number"});
}
next();

}
export default validateDetails