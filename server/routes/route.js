import express  from "express";
import userSignUp from "../controller/user-controller.js";

const router =  express.Router();



//signup router
router.post('/signUp',userSignUp);




export default router;