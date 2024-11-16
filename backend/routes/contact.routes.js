import express from "express";
import getAllContacts from "../controllers/getAllContacts.js";
import validateDetails from "../middlewares/validateDetalis.js";
import addContact from "../controllers/addContact.js";
import checkExist from "../middlewares/checkExist.js";
import deleteContact from "../controllers/deleteContact.js";
import editContact from "../controllers/editContact.js";
import duplicateCheck from "../middlewares/duplicateCheck.js";

const router=express.Router();

router.get("/",getAllContacts);
router.post("/",validateDetails,duplicateCheck,addContact);
router.put("/:id",checkExist,validateDetails,editContact);
router.delete("/:id",checkExist,deleteContact);

export default router