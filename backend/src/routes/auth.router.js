import { Router } from "express";
const router = Router();
import { postLogin, postSignup, getLogout } from '../controllers/auth.controller.js'; 
import upload from "../utils/multer.util.js";

router.post('/signup',upload.single("image"),postSignup);
router.post('/login',postLogin);
router.get('/logout',getLogout);


export default router;

