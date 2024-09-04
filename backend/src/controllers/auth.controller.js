import User from "../models/user.model.js";
import ErrorHandler from "../utils/ErrorHandler.util.js";
import ErrorWrapper from "../utils/ErrorWrapper.util.js";
import uploadCloudinary from "../utils/uploadCloudinary.util.js";

export const postSignup = ErrorWrapper(async function(req,res,next) {
    const {username, password, email, name} = req.body;
    let incomingFields = Object.keys(req.body);
    let requiredFields = ['username', 'password', 'email', 'name'];
    let missingFields = requiredFields.filter((f)=>!incomingFields.includes(f));
    if(missingFields.length) {
        throw new ErrorHandler(401,`Missing Fields ${missingFields.join(', ')} are required!!`);
    }

    let existingUser = await User.findOne({
        $or: [
            {username},
            {email}
        ]
    });

    if(existingUser) {
        throw new ErrorHandler(401,'Username or EmailId already in use!!');
    }

    let cloudinaryResponse;
    try{
        cloudinaryResponse = await uploadCloudinary(req.file.path);
    }catch(error) {
        throw new ErrorHandler(500, `Error while uploading image`);
    }

    try{
        const user = await User.create({
            username,
            password,
            email,
            name,
            image: cloudinaryResponse.secure_url
        });

        let showUser = await User.findOne({_id:user._id}).select("-password");
        res.status(201).json({
            success:true,
            "user":showUser
        });
    }catch(err) {
        throw new ErrorHandler(500,'Currently facing issue in signing up!!');
    }
});

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        let user = await User.findOne({
            _id: userId
        });
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        return {
            accessToken,
            refreshToken
        }
    } catch (error) {
        throw new ErrorHandler(500, `Error while generating access token and refresh token`);
    }
}

export const postLogin = ErrorWrapper(async function (req, res, next) {
    const { username, password } = req.body;
    if (!username) {
        throw new ErrorHandler(400, 'Username or Email is missing !!');
    }
    if (!password) {
        throw new ErrorHandler(400, "Password is missing");
    }
    let user = await User.findOne({
         username 
    });
    if (!user) {
        throw new ErrorHandler(400, "Invalid username or email");
    }

    const passwordMatch =await user.comparePassword(password);
    if (!passwordMatch) {
        throw new ErrorHandler(400, "Invalid password");
    }
    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);
    user.refreshToken = refreshToken;
    // console.log(user);
    await user.save();
    user = await User.findOne({
        $or: [
            { username }
        ]
    }).select("-password -refreshToken")

    res.status(200)
        .cookie("RefreshToken", refreshToken,{
            httpOnly : true
        })
        .cookie("AccessToken", accessToken,{
            httpOnly : true
        })
        .json({
            success: true,
            message: "Login Successfull",
            user
        });
})

export const getLogout =  (req, res, next) => {
    res.
    status(200)
    .cookie("RefreshToken","",{
        maxAge: 0
    }).cookie("AccessToken","",{
        maxAge: 0
    })
    .json({
        message: "Logged out successfully"
    })

}
