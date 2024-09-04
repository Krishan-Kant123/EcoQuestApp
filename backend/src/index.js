import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const DB_NAME = process.env.DB_NAME;
const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(bodyParser.json({limit:'4kb'}));
app.use(bodyParser.urlencoded({extended:true,limit:'4kb'}));
app.use(express.static('public'));

app.use(cookieParser());

import authRouter from './routes/auth.router.js'
app.use('/',authRouter);

import { verifyJWT } from "./middlewares/verifyJWT.middleware.js";
import ErrorWrapper from "./utils/ErrorWrapper.util.js";

const getUser = ErrorWrapper((req, res) =>{
    try{
        let user = req.user;
        res.status(200).json({
            success: true,
            message: "User found successfully",
            user: user
        });
    }catch(err){
        throw new ErrorHandler(err.statusCode || 500, err.message);
    }
});

app.get('/getUser',verifyJWT,getUser);


mongoose.connect('mongodb://localhost:27017/'+DB_NAME)
    .then(app.listen((PORT),()=>{
        console.log('http://localhost:'+PORT);
    }))
    .catch(err=>{
        console.log(err);
    })