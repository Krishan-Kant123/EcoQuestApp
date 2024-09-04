import jwt from "jsonwebtoken";
import User from "../models/user.model.js"
import ErrorHandler from "../utils/ErrorHandler.util.js";
import ErrorWrapper from "../utils/ErrorWrapper.util.js";

export const verifyJWT = ErrorWrapper(async (req,res,next)=>{
    const incomingRefreshToken = req.cookies.RefreshToken;
    const incomingAccessToken = req.cookies.AccessToken;
    if(!incomingAccessToken || !incomingRefreshToken) {
        return res.status(401).json({
            status: 401,
            message: "You need to login first !!",
            success:false
        })
    }

    try{
        let userinfo = jwt.verify(incomingAccessToken, process.env.ACCESS_TOKEN_KEY);
        let user = await User.findOne({
            _id: userinfo._id
        })
        let userRefreshToken = user.refreshToken;
        if(userRefreshToken !== incomingRefreshToken) {
            throw new ErrorHandler(401,"Not authorized to access !!");
        }
        req.user = user;
        next();
    }catch(err){
        throw new ErrorHandler(500,"Currently facing internal issue !");
    }

});