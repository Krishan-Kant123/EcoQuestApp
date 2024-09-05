import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";


const citySchema = new Schema({
    name: {
        type:String,
        required: true,   
    },
    state:{
        type:String,
        required: true,
    },
    score:{
        type:Number,
        default: 0
    },
    queriesReport: [
        {
            IllegalDump: [
                {
                    location:String,
                }
            ]
        }
    ]
})

const User = mongoose.model('User',userSchema);
export default User;
