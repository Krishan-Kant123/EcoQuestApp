import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    username :{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type:String,
        required:true,
        lowercase: true,
        trim: true
    },
    password:{
        type:String,
        required: true
    },
    refreshToken: {
        type:String
    },
    accessToken:{
        type:String
    },
    points: {
        type: Number,
        default: 0
    },
    redemptionHistory: [
        {
            date: {
                type: Date,
                default: Date.now
            },
            pointsRedeemed: {
                type: Number,
                required: true
            },
            itemsRedeemed: {
                type: Schema.Types.ObjectId,
                ref: 'Items'
            }
        }
    ]
},{
    timestamps: true
});

userSchema.pre('save', (async function(next) {
        if (!this.isModified("password")) return next();
        let user = this;
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;
        next();
    }
));

userSchema.methods.comparePassword = async function(enterPassword) {
    const user = this;
    let passwordMatch = await bcrypt.compare(enterPassword,user.password);
    return passwordMatch;
};

userSchema.methods.generateAccessToken = async function() {
    let user = this;
    return jwt.sign({
        _id: user._id,
        email: user.email,
        username: user.username,
        name: user.name
      }, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      });
}

userSchema.methods.generateRefreshToken = async function() {
    let user = this;
    return jwt.sign({
        _id: user._id
      }, process.env.REFRESH_TOKEN_KEY, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY});
}

const User = mongoose.model('User',userSchema);
export default User;


