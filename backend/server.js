import express from "express";
import connectToDB from "./utils/mongoose.connect.js";
import contactRouter from "./routes/contact.routes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());


app.use("/contacts",contactRouter)

app.listen(process.env.PORT,()=>{
connectToDB();
console.log("Server is running on port ",process.env.PORT);
});